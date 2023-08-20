// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_GH-nWc3YXLjc5-EYRYid-jvGORskmWs",
  authDomain: "text-share-react-js.firebaseapp.com",
  projectId: "text-share-react-js",
  storageBucket: "text-share-react-js.appspot.com",
  messagingSenderId: "269727136529",
  appId: "1:269727136529:web:30c4c79e0456dedd436ab0",
  measurementId: "G-GCTH2RD5MG",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
