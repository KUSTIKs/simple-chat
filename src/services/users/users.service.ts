import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { getAdditionalUserInfo } from 'firebase/auth';

import { signInWithGoogle, db, auth } from '@root/firebaseconfig';
import { DBAccount } from '@root/src/types/common/account.type';

import { Account } from '@simple-chat/types';
import { BOT_ID } from '@simple-chat/config';

import { chatsService } from '../chats';

class UsersService {
  readonly collectionRef = collection(db, 'accounts');

  async signIn() {
    const userCredential = await signInWithGoogle();
    const { uid, displayName, photoURL, email } = userCredential.user;

    const account: DBAccount = {
      name: displayName!,
      avatarUrl: photoURL!,
      email: email!,
      isOnline: false,
      lastTimeOnlineAt: serverTimestamp() as Timestamp,
    };

    await setDoc(doc(this.collectionRef, uid), account, {
      mergeFields: ['avatarUrl', 'name', 'email'],
    });

    const isNewUser = getAdditionalUserInfo(userCredential)?.isNewUser;

    if (isNewUser) {
      await chatsService.create({ interlocutorId: BOT_ID });
    }
  }

  handleOnline = async () => {
    if (!auth.currentUser) return;
    const accountRef = doc(this.collectionRef, auth.currentUser.uid);
    if (!accountRef) return;
    const updateValues: Partial<Account> = {
      isOnline: true,
      lastTimeOnlineAt: serverTimestamp() as Timestamp,
    };

    await setDoc(accountRef, updateValues);
  };

  handleOffline = async () => {
    if (!auth.currentUser) return;
    const accountRef = doc(this.collectionRef, auth.currentUser.uid);
    if (!accountRef) return;
    const updateValues: Partial<Account> = {
      isOnline: false,
      lastTimeOnlineAt: serverTimestamp() as Timestamp,
    };

    await setDoc(accountRef, updateValues);
  };
}

export const usersService = new UsersService();
