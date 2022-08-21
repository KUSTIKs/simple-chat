import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAoU2WVIBOdw4TnFTrJD6feMb7NemEaCy8',
  authDomain: 'simple-chat-71ab0.firebaseapp.com',
  projectId: 'simple-chat-71ab0',
  storageBucket: 'simple-chat-71ab0.appspot.com',
  messagingSenderId: '382185603019',
  appId: '1:382185603019:web:c6bd2d9251d6d2c9f5404e',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
