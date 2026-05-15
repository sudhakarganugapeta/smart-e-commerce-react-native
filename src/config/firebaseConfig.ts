import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {getAuth, initializeAuth,getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {get} from 'firebase/storage';

// Initialize Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyCKPJfoFytSCcj3fxb4ZdC6dqauAQsNDU0",
  authDomain: "smart-e-commerce-app-15.firebaseapp.com",
  projectId: "smart-e-commerce-app-15",
  storageBucket: "smart-e-commerce-app-15.firebasestorage.app",
  messagingSenderId: "102188581802",
  appId: "1:102188581802:web:2df3050faf190f104da1d3"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app,{persistence:getReactNativePersistence(AsyncStorage)});  
export const auth = getAuth(app);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
