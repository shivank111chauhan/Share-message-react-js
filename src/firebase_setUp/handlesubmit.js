import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const handleSubmit = (key, value) => {
  const cityRef = doc(db, "Share_File_Data", key);
  const expireAt = new Date().getTime() + 5 * 60 * 60 * 1000; // 5 hours in milliseconds

  let data = {
    value: value,
    expireAt: expireAt,
  };

  try {
    setDoc(cityRef, data);
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};

export default handleSubmit;
