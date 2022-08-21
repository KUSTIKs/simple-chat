import {
  addDoc,
  collection,
  doc,
  DocumentSnapshot,
  endAt,
  getDoc,
  getDocs,
  orderBy,
  query,
  QueryConstraint,
  startAt,
  where,
} from 'firebase/firestore';

import { auth, db } from '@root/firebaseconfig';

import { Account, Chat, DBChat, DBMessage, Message } from '@simple-chat/types';
import { AppError } from '@simple-chat/utils';

import { usersService } from '../users';

class ChatsService {
  readonly collectionRef = collection(db, 'chats');

  async getAll({ q = '' }: { q?: string } = {}) {
    const accountSnapshots = await getDocs(
      query(
        usersService.collectionRef,
        orderBy('name'),
        startAt(q),
        endAt(`${q}~`)
      )
    );

    const accountRefs = accountSnapshots.docs.map((doc) => doc.ref);
    const isNothingFound = accountRefs.length === 0 && q;

    const queryConstrains = [
      accountRefs.length > 0 && q
        ? where('members', 'array-contains-any', accountRefs)
        : null,
    ].filter((constraint) => constraint !== null) as QueryConstraint[];

    const chatsQuery = query(this.collectionRef, ...queryConstrains);
    const snapshot = await getDocs(chatsQuery);
    const chats = isNothingFound
      ? []
      : await Promise.all(
          snapshot.docs
            ?.filter((doc) =>
              (doc.data() as Chat).members.find(
                (member) => member.id === auth.currentUser?.uid
              )
            )
            .map(this.getFromSnapshot)
        );

    return chats;
  }

  async getById(id: string) {
    const snapshot = await getDoc(doc(this.collectionRef, id));
    const chat = await this.getFromSnapshot(snapshot);
    return chat;
  }

  async create({ interlocutorEmail }: { interlocutorEmail: string }) {
    const { currentUser } = auth;
    if (!currentUser) {
      throw new AppError('User not authorized');
    }

    const interlocutorQuery = query(
      usersService.collectionRef,
      where('email', '==', interlocutorEmail)
    );
    const interlocutorAccountRef = (await getDocs(interlocutorQuery)).docs[0]
      ?.ref;
    const currentAccountRef = doc(usersService.collectionRef, currentUser.uid);

    if (!interlocutorAccountRef) {
      throw new AppError('No user with such email');
    }

    const isExists = await getDocs(
      query(
        this.collectionRef,
        where('members', 'in', [interlocutorAccountRef, currentAccountRef])
      )
    ).then((doc) => !doc.empty);

    if (isExists) {
      throw new AppError('Chat already exists');
    }

    const chat: DBChat = {
      members: [currentAccountRef, interlocutorAccountRef],
      messages: [],
    };

    addDoc(this.collectionRef, chat);
  }

  async getFromSnapshot(snapshot: DocumentSnapshot) {
    const docData = snapshot.data() as DBChat;

    if (
      !auth.currentUser ||
      typeof docData.members.find((m) => m.id === auth.currentUser?.uid) ===
        'undefined'
    ) {
      throw new AppError('You are not a member of this chat');
    }

    const id = snapshot.id;
    const members = (await Promise.all(
      docData.members.map((ref) =>
        getDoc(ref).then((doc) => ({ ...doc.data(), id: doc.id }))
      )
    )) as [Account, Account];

    const messages = await Promise.all(
      docData.messages.map(async (doc) => {
        const message = (await getDoc(doc)) as DocumentSnapshot<DBMessage>;
        const data = message.data()!;
        const author = await getDoc(data.author).then(
          (doc) => ({ id: doc.id, ...doc.data() } as Account)
        );

        return {
          ...data,
          id: doc.id,
          author,
        } as Message;
      })
    );

    const chat: Chat = {
      ...docData,
      id,
      members,
      messages,
    };

    return chat;
  }
}

export const chatsService = new ChatsService();
