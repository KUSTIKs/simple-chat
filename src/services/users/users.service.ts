import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';

import { signInWithGoogle, db, auth } from '@root/firebaseconfig';

import { Account } from '@simple-chat/types';

class UsersService {
  readonly collectionRef = collection(db, 'accounts');

  async signIn() {
    const userCredential = await signInWithGoogle();
    const { uid, displayName, photoURL, email } = userCredential.user;

    const account: Account = {
      id: uid,
      name: displayName!,
      avatarUrl: photoURL!,
      email: email!,
      isOnline: false,
      lastTimeOnlineAt: serverTimestamp() as Timestamp,
    };

    setDoc(doc(this.collectionRef, uid), account);
  }

  handleOnline = async () => {
    if (!auth.currentUser) return;
    const accountRef = doc(this.collectionRef, auth.currentUser.uid);
    if (!accountRef) return;
    const updateValues: Partial<Account> = {
      isOnline: true,
      lastTimeOnlineAt: serverTimestamp() as Timestamp,
    };
    try {
      updateDoc(accountRef, updateValues);
    } catch (error) {}
  };

  handleOffline = async () => {
    if (!auth.currentUser) return;
    const accountRef = doc(this.collectionRef, auth.currentUser.uid);
    if (!accountRef) return;
    const updateValues: Partial<Account> = {
      isOnline: false,
      lastTimeOnlineAt: serverTimestamp() as Timestamp,
    };

    try {
      updateDoc(accountRef, updateValues);
    } catch (error) {}
  };
}

export const usersService = new UsersService();
