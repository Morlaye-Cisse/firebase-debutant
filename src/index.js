// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";

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

//reference collection id generer
const users = collection(db, 'users');
const villesRef = collection(db, 'villes');


//recupration des donnees du documents villes sans mise a jour a temp reel de firestore
getDocs(villesRef).then((snapshot) => {
    // let  villes= [];
    // snapshot.docs.forEach((doc) => {
    //     villes.push({ ...doc.data(), id: doc.id });
    // })

    // console.log(villes);
})

//RealTime update firestore ( mise a jour a temp reel de firestore)
onSnapshot(villesRef,(snapshot)=>{
    let  villes= [];
    snapshot.docs.forEach((doc) => {
        villes.push({ ...doc.data(), id: doc.id });
    })

    console.log(villes);
})



//ajouter un document
const addCityForm = document.querySelector(".ajouter");
addCityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //ajouter un nouveau document avec un id generer
    addDoc(villesRef, {
        pays: addCityForm.pays.value,
        ville: addCityForm.ville.value,
        capital: addCityForm.capital.value === "true" ? "true" : "false",
        dateDajout: serverTimestamp(),
    }).then(()=>addCityForm.reset());


    //ajouter du document avec un id personnaliser
    // setDoc(doc(db, "villes", "KIN"), {
    //     pays: addCityForm.pays.value,
    //     ville: addCityForm.ville.value,
    //     capital: addCityForm.capital.value === "true" ? "true" : "false",
    //     dateDajout: serverTimestamp(),
    // }).then(() => addCityForm.reset());
});


//suppression d'un document
const deleteCityForm = document.querySelector(".delete");
deleteCityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef= doc(db, "villes", deleteCityForm.id.value);

    //suppression d'un document
    deleteDoc(docRef).then(() => deleteCityForm.reset());
});


//mettre a jour un document
const updateCityForm = document.querySelector(".update");
updateCityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const docRef= doc(db, "villes", updateCityForm.id.value);

    //mettre a jour un document
    updateDoc(docRef, {
        pays: updateCityForm.pays.value,
        ville: updateCityForm.ville.value,
        capital: updateCityForm.capital.value === "true"? "true" : "false",
        dateDajout: serverTimestamp(),
    }).then(() => updateCityForm.reset());
});