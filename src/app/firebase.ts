import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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

export const getTimeline = async () => {
  try {
    const ref = db.doc('data/timeline');
    const snapShot = await ref.get();
    console.log(snapShot.data());
    if (snapShot.exists) return snapShot.data();

    throw new Error("Couldn't fetch timeline from the database.");
  } catch (err) {
    console.log(err);
  }
};
export const getChallenge = async () => {
  try {
    const ref = db.doc('data/challenge');
    const snapShot = await ref.get();
    console.log(snapShot.data());
    if (snapShot.exists) return snapShot.data();

    throw new Error("Couldn't fetch challenge from the database.");
  } catch (err) {
    console.log(err);
  }
};

export const getEvent = async () => {
  try {
    const ref = db.doc('data/event');
    const snapShot = await ref.get();
    console.log(snapShot.data());
    if (snapShot.exists) return snapShot.data();

    throw new Error("Couldn't fetch event from the database.");
  } catch (err) {
    console.log(err);
  }
};

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
