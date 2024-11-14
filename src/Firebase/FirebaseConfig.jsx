
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWZ-PFW4uVQdAOBnu24GaNbes2FXhoMec",
  authDomain: "luxnest.firebaseapp.com",
  projectId: "luxnest",
  storageBucket: "luxnest.firebasestorage.app",
  messagingSenderId: "375448609309",
  appId: "1:375448609309:web:c3afe22f424b34944cdcf4"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }