import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWZ_Son1plyiCFWEpqmSxh7dtsQzn4f20',
  authDomain: 'e-commerce-react-1db50.firebaseapp.com',
  projectId: 'e-commerce-react-1db50',
  storageBucket: 'e-commerce-react-1db50.appspot.com',
  messagingSenderId: '554728855661',
  appId: '1:554728855661:web:b5fdf8306dfc0e107c8764',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
