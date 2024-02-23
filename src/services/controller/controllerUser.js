// controllers
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../server/firebase';

const insertUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { insertUser };
