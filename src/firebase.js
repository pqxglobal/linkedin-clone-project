import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsglaOlBF_zNnVYhuAtwntga0OMS7c2kc',
  authDomain: 'linkedin-clone-ef750.firebaseapp.com',
  projectId: 'linkedin-clone-ef750',
  storageBucket: 'linkedin-clone-ef750.appspot.com',
  messagingSenderId: '881967613670',
  appId: '1:881967613670:web:fd852984d085e275ef5d27',
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
