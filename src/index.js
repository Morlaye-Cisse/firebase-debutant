// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, getDocs, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9xp4XB2-xa3XLit1Y_sKZv3y5j2y3Fk",
  authDomain: "fir-demo-b9511.firebaseapp.com",
  projectId: "fir-demo-b9511",
  storageBucket: "fir-demo-b9511.appspot.com",
  messagingSenderId: "332752083566",
  appId: "1:332752083566:web:0b335835f10f6d3a8b247f",
  measurementId: "G-YDGMGD2DH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//initializeFirebase
const db = getFirestore(app);

//get collection
const users=collection(db, 'users');


//recupration des documents
getDocs(users).then((snapshot)=>{
    let users = [];
    snapshot.forEach((doc)=>{
        users.push({...doc.data(), id: doc.id});
    })

    console.log(users);
})

// export { app, db };
