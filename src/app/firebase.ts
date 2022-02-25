import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO : REMOVE THIS FILE => CREATE NEW SERVICE

let firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const postContactData = async data => {
  try {
    const createdAt = new Date();
    const contactRef = db.collection(`contact`).doc(Date.now().toString());
    await contactRef.set({
      ...data,
      createdAt,
    });
  } catch (err) {
    console.error(err);
  }
};
