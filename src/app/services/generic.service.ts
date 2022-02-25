import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useQuery } from 'react-query';
import { Utils } from '.';

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

export class GenericService<T> {
  protected prefix: string = '';
  static dataBase;

  constructor(prefix: string) {
    this.prefix = prefix;
    if (GenericService.dataBase === undefined) {
      firebase.initializeApp(firebaseConfig);
      GenericService.dataBase = firebase.firestore();
    }
  }

  getDoc = async <T>() => {
    try {
      const ref = GenericService.dataBase.doc(Utils.DB_URL + this.prefix);
      const snapShot = await ref.get();
      return snapShot.data() as T;
    } catch (err) {
      throw new Error(`Couldn't fetch ${this.prefix} from the database.`);
    }
  };
  useGetDoc = () => {
    return useQuery<T>(this.prefix, this.getDoc, {
      staleTime: 60 * 10000, // refresh 5 minutes
    });
  };
}
