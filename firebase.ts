import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIlyy70YWfENyZ8K3OyEDDM0gJcjymVv8',
  authDomain: 'twitter-clone-xx.firebaseapp.com',
  projectId: 'twitter-clone-xx',
  storageBucket: 'twitter-clone-xx.appspot.com',
  messagingSenderId: '374291609897',
  appId: '1:374291609897:web:d143692e1881c2fca89f38',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
