import { doc, getDoc } from "@firebase/firestore";
import { db } from "./firebase";

const getDataFromFirestore = async (key) => {
  try {
    const ref = doc(db, "Share_File_Data", key); // Replace with your collection name
    const querySnapshot = await getDoc(ref);
    const fetchedData = querySnapshot.data().value;
    return fetchedData;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    return "error";
  }
};

export default getDataFromFirestore;
