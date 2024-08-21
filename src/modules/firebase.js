// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyD9d9F2JxilvWk4n5Bt68-Q9nUdiNh_Hb0",
     authDomain: "sandbox-b2af1.firebaseapp.com",
     projectId: "sandbox-b2af1",
     storageBucket: "sandbox-b2af1.appspot.com",
     messagingSenderId: "480667598698",
     appId: "1:480667598698:web:9290ecf885a084c06def13",
     measurementId: "G-15CTH6GZF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db