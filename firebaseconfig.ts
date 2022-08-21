// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCqOOzDiZGGud3AYYavfp58VJ-ICtbGv7E',
//   authDomain: 'simple-chat-14413.firebaseapp.com',
//   projectId: 'simple-chat-14413',
//   storageBucket: 'simple-chat-14413.appspot.com',
//   messagingSenderId: '763292861597',
//   appId: '1:763292861597:web:1f763c963f8287a26a8074',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDsXog8h52M1OjayZckJ-nyXhCuJakI4WQ',
  authDomain: 'test-1b525.firebaseapp.com',
  projectId: 'test-1b525',
  storageBucket: 'test-1b525.appspot.com',
  messagingSenderId: '214025628032',
  appId: '1:214025628032:web:049f1bda88a567d4577965',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
