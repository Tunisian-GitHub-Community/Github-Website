import firebase from "firebase/app";
import "firebase/firestore";

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
    const ref = db.doc("data/timeline");
    const snapShot = await ref.get();
    if (snapShot.exists) return snapShot.data();

    throw new Error("Couldn't fetch timeline from the database");
  } catch (err) {
    console.log(err);
  }
};

export const createContactData = async (data) => {
  const contactRef = db.doc(`/contact`);
  const { name, mail, message } = data;
  console.log(Date.now());
  const createAt = new Date();
  try {
    await contactRef.set({
      id: Date.now(),
      message,
      name,
      mail,
      createAt,
    });
  } catch (err) {
    console.error(err);
  }
};
