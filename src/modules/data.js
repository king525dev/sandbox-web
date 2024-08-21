import {
     doc,
     setDoc,
     collection,
     getDocs,
     getDoc
} from "firebase/firestore";
import db from './firebase'

const uploadData = async (values) => {
     try {
          const docRef = await setDoc(doc(db, "projects", values.id), values);
          alert("Project Successfully Created");
     } catch (e) {
          console.error("Error adding document: ", e);
     }
}

const readData = async () => {
     const out = []
     const collectionRef = collection(db, "projects");
     const docsSnap = await getDocs(collectionRef);
     docsSnap.forEach((doc) => {
          out.push(doc.data())
     });

     return out;
}

const readDoc = async (id) => {
     
     const docRef = doc(db, "projects", id);
     const docSnap = await getDoc(docRef);

     if (docSnap.exists()) {
          return docSnap.data();
     } else {
          console.error("Error Fetching Project");
     }
}


export default { readData, uploadData, readDoc }