import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqBhZEtyAnSHz0pZp560b2FG02WP3x6M8",
  authDomain: "techshop-f37c5.firebaseapp.com",
  databaseURL: "https://techshop-f37c5-default-rtdb.firebaseio.com",
  projectId: "techshop-f37c5",
  storageBucket: "techshop-f37c5.appspot.com",
  messagingSenderId: "210909515572",
  appId: "1:210909515572:web:b44d0c97237ce983891f61",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };

