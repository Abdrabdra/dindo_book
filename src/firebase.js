import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = process.env.REACT_APP_FIREBASE_APIKEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_FIREBASE_APPID;

const firebaseConfig = {
  apiKey: `AIzaSyBCxJi-bvewLVtn-W5Iwm7ldfRmdwfwVaA`,
  authDomain: `testdidar1.firebaseapp.com`,
  projectId: `testdidar1`,
  storageBucket: `testdidar1.appspot.com`,
  messagingSenderId: `990287812018`,
  appId: `1:990287812018:web:660d5287074c2a27d900ab`,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const fs = firebase;

// G-FGJDZ4DHYT

export const auth = getAuth();

// const firebaseConfig = {
//   apiKey: "AIzaSyBCxJi-bvewLVtn-W5Iwm7ldfRmdwfwVaA",
//   authDomain: "testdidar1.firebaseapp.com",
//   projectId: "testdidar1",
//   storageBucket: "testdidar1.appspot.com",
//   messagingSenderId: "990287812018",
//   appId: "1:990287812018:web:660d5287074c2a27d900ab",
//   measurementId: "G-FGJDZ4DHYT"
// };
