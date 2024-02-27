// controllers
import { doc, getDoc, setDoc } from 'firebase/firestore'; 
import { db } from '../server/firebase';


const insertUser = async (authId, userData) => {
  try {
    // Use o ID de autenticação como ID do documento
    await setDoc(doc(db, "users", authId), userData);
  
    //console.log("Document written with ID: ", authId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getUserData = async (userID) => {

  try {
    const userDocRef = doc(db, "users", userID);
    const userDocSnapShot = await getDoc(userDocRef);
  
    if(userDocSnapShot.exists()) {
      return userDocSnapShot.data();
    } else {
      console.log("Não há dados para o usuário com o ID fornecido.");
      return null;
    }  
  } catch (error) {
    console.error("Erro ao recuperar dados do usuário:", error);
    throw error;
  }  
}

export { insertUser, getUserData};
