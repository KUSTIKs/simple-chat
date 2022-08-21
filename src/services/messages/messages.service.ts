import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';

import { auth, db } from '@root/firebaseconfig';

import { DBMessage } from '@simple-chat/types';

import { chatsService } from '../chats';
import { usersService } from '../users';

class MessagesService {
  readonly collectionRef = collection(db, 'messages');

  async create({
    chatId,
    message: userMessage,
  }: {
    chatId: string;
    message: {
      content: string;
    };
  }) {
    const chatRef = doc(chatsService.collectionRef, chatId);
    const authorRef = doc(usersService.collectionRef, auth.currentUser!.uid);
    const message: DBMessage = {
      author: authorRef,
      content: userMessage.content,
      createdAt: serverTimestamp() as Timestamp,
    };

    const messageRef = await addDoc(this.collectionRef, message);

    await updateDoc(chatRef, {
      messages: arrayUnion(messageRef),
    });
  }
}

export const messagesService = new MessagesService();
