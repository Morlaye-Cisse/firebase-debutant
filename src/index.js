// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, collectionGroup, getFirestore, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";

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

//Recuperation du firestore
const db = getFirestore(app);

// //reference collection id generer
// const users = collection(db, 'users');
// const villesRef = collection(db, 'villes');


// //recupration des donnees du documents villes sans mise a jour a temp reel de firestore
// getDocs(villesRef).then((snapshot) => {
//     // let  villes= [];
//     // snapshot.docs.forEach((doc) => {
//     //     villes.push({ ...doc.data(), id: doc.id });
//     // })

//     // console.log(villes);
// })

// //RealTime update firestore ( mise a jour a temp reel de firestore)
// onSnapshot(villesRef,(snapshot)=>{
//     let  villes= [];
//     snapshot.docs.forEach((doc) => {
//         villes.push({ ...doc.data(), id: doc.id });
//     })

//     console.log(villes);
// })



// //ajouter un document
// const addCityForm = document.querySelector(".ajouter");
// addCityForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     //ajouter un nouveau document avec un id generer
//     addDoc(villesRef, {
//         pays: addCityForm.pays.value,
//         ville: addCityForm.ville.value,
//         capital: addCityForm.capital.value === "true" ? "true" : "false",
//         dateDajout: serverTimestamp(),
//     }).then(()=>addCityForm.reset());


//     //ajouter du document avec un id personnaliser
//     // setDoc(doc(db, "villes", "KIN"), {
//     //     pays: addCityForm.pays.value,
//     //     ville: addCityForm.ville.value,
//     //     capital: addCityForm.capital.value === "true" ? "true" : "false",
//     //     dateDajout: serverTimestamp(),
//     // }).then(() => addCityForm.reset());
// });


// //suppression d'un document
// const deleteCityForm = document.querySelector(".delete");
// deleteCityForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const docRef= doc(db, "villes", deleteCityForm.id.value);

//     //suppression d'un document
//     deleteDoc(docRef).then(() => deleteCityForm.reset());
// });


// //mettre a jour un document
// const updateCityForm = document.querySelector(".update");
// updateCityForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const docRef= doc(db, "villes", updateCityForm.id.value);

//     //mettre a jour un document
//     updateDoc(docRef, {
//         pays: updateCityForm.pays.value,
//         ville: updateCityForm.ville.value,
//         capital: updateCityForm.capital.value === "true"? "true" : "false",
//         dateDajout: serverTimestamp(),
//     }).then(() => updateCityForm.reset());
// });

// const citiesRef=collection(db, 'villes');
// //Ajouter un dataset dans BK collection "Villes"
// Promise.all([
//     setDoc(doc(citiesRef, "KIN"), {
//       pays: "Rd Congo",
//       ville: "Kinshasa",
//       capitale: true,
//       dateDajout: new Date("Jul 1, 2022"),
//       population: 15000000,
//       communes: [
//         "Gombe",
//         "Bandale",
//         "Kinshasa",
//         "LingwaBK",
//         "Limete",
//         "Ngaliema",
//       ],
//     }),
//     setDoc(doc(citiesRef, "BK"), {
//       pays: "Rd Congo",
//       ville: "Bukavu",
//       capitale: false,
//       dateDajout: new Date("Jul 6, 2022"),
//       population: 2000000,
//       communes: ["Ibanda", "Kadutu", "Bagira"],
//     }),
//     setDoc(doc(citiesRef, "DEGO"), {
//       pays: "Rd Congo",
//       ville: "Goma",
//       capitale: false,
//       dateDajout: new Date("Jul 9, 2022"),
//       population: 1000000,
//       communes: ["Goma", "Karisimbi"],
//     }),
//     setDoc(doc(citiesRef, "BJ"), {
//       pays: "Burundi",
//       ville: "Bujumbura",
//       capitale: false,
//       dateDajout: new Date("Jul 15, 2022"),
//       population: 1500000,
//       communes: ["Ntahangwa", "Mukazi", "Muha"],
//     }),
//     setDoc(doc(citiesRef, "GTG"), {
//       pays: "Burundi",
//       ville: "Gitega",
//       capitale: true,
//       dateDajout: new Date("Jul 17, 2022"),
//       population: 130000,
//       communes: ["Magara", "Nyamugari", "Rutonde"],
//     }),
//     setDoc(doc(citiesRef, "KGL"), {
//       pays: "Rwanda",
//       ville: "Kigali",
//       capitale: true,
//       dateDajout: new Date("Jul 28, 2022"),
//       population: 1500000,
//       communes: ["Gasabo", "Kicukiro", "Nyarugenge"],
//     }),
//     setDoc(doc(citiesRef, "GSG"), {
//       pays: "Rwanda",
//       ville: "Gisenyi",
//       capitale: false,
//       dateDajout: new Date("Jul 18, 2022"),
//       population: 160000,
//       communes: ["Kibuye", "Cyangugu"],
//     }),
//     setDoc(doc(citiesRef, "NBO"), {
//       pays: "Kenya",
//       ville: "Nairobi",
//       capitale: true,
//       dateDajout: new Date("Jul 10, 2022"),
//       population: 4000000,
//       communes: [
//         "WestBKnds",
//         "Dagoretti",
//         "BKngata",
//         "Kamukunji",
//         "Embakasi",
//         "Njiru",
//         "Kakadara",
//       ],
//     }),
//     setDoc(doc(citiesRef, "MBS"), {
//       pays: "Kenya",
//       ville: "Mombasa",
//       capitale: false,
//       dateDajout: new Date("Jul 3, 2022"),
//       population: 120800,
//       communes: ["Changwaniwe", "Kisauni", "Koni", "Lokini"],
//     }),
//   ])
//     .then(() => console.log("Données 'Villes' ajoutées avec succès"))
//     .catch((error) => console.log(error.message));

//   //Ajouter un dataset dans BK sous-collection "habitants"
//   Promise.all([
//     addDoc(collection(citiesRef, "KIN", "habitants"), {
//       noms: "Patrick Bashizi",
//       age: "35 ans",
//       sexe: "M",
//     }),
//     addDoc(collection(citiesRef, "KIN", "habitants"), {
//       noms: "Odette Kavira",
//       age: "32 ans",
//       sexe: "F",
//     }),
//     addDoc(collection(citiesRef, "BK", "habitants"), {
//       noms: "Alain Cisirika",
//       age: "27 ans",
//       sexe: "M",
//     }),
//     addDoc(collection(citiesRef, "BK", "habitants"), {
//       noms: "Josephine Romana",
//       age: "22 ans",
//       sexe: "F",
//     }),
//     addDoc(collection(citiesRef, "DEGO", "habitants"), {
//       noms: "Lens Mutombo",
//       age: "30 ans",
//       sexe: "M",
//     }),
//     addDoc(collection(citiesRef, "DEGO", "habitants"), {
//       noms: "Josephine Ndeze",
//       age: "23 ans",
//       sexe: "F",
//     }),
//     addDoc(collection(citiesRef, "BJ", "habitants"), {
//       noms: "Jean Lionel",
//       age: "28 ans",
//       sexe: "M",
//     }),
//     addDoc(collection(citiesRef, "GTG", "habitants"), {
//       noms: "Chouella Kayonga",
//       age: "23 ans",
//       sexe: "F",
//     }),
//     addDoc(collection(citiesRef, "KGL", "habitants"), {
//       noms: "Cynthia React",
//       age: "24 ans",
//       sexe: "F",
//     }),
//     addDoc(collection(citiesRef, "GSG", "habitants"), {
//       noms: "Esther Android",
//       age: "26 ans",
//       sexe: "M",
//     }),
//     addDoc(collection(citiesRef, "NBO", "habitants"), {
//       noms: "Tabitha CrowSource",
//       age: "29 ans",
//       sexe: "F",
//     }),
//     addDoc(collection(citiesRef, "MBS", "habitants"), {
//       noms: "Wayne Angular",
//       age: "30 ans",
//       sexe: "M",
//     }),
//   ])
//     .then(() => console.log("Données 'habitants' ajoutées avec succès"))
//     .catch((error) => console.log(error.message));


/* ==> REQUETE SIMPLE <== */
const citiesRef = collection(db, 'villes');

//Recuprer les ville de la Rd Congo
const q1 = query(citiesRef, where("pays", '==', "Rd Congo"))

//Recuperer toute les ville sauf Rd Congo
const q2 = query(citiesRef, where("pays", '!=', "Rd Congo"));

//Recuperer seulement la pays du Rd Congo et celle du Rwanda
const q3 = query(citiesRef, where("pays", 'in', ["Rd Congo", "Rwanda"]));

//Recuperer toute les ville sauf 'Bujumbura', 'Giseyni' et 'Goma'
const q4 = query(citiesRef, where("ville", 'not-in', ["Bujumbura", "Giseyni", "Goma"]));

//Recuperer toute les dont la population est superieur a 1M
const q5 = query(citiesRef, where("population", '>', 1000000));

//Recuperer toute les ville ajouter entre le 10 et 30 juillet 2022 et
// arrangez-les selon l'ordre decroissant
const q6 = query(
    citiesRef,
    where("dateDajout", '>', new Date('jul 10, 2022')),
    where("dateDajout", '<', new Date('jul 30, 2022')),
    orderBy("dateDajout", "desc"));

//Recuperer les ville avec comme commune 'Nyarugege'
const q7 = query(citiesRef, where("communes", 'array-contains', "Nyarugenge"));

//Recuperer les ville avec comme commune 'Nyarugege', 'Bandale', 'Cyanguage' et Ibanda
const q8 = query(citiesRef, where("communes", 'array-contains-any', ["Nyarugenge", "Bandale", "Cyangugu", "Ibanda"]));

//Recuperer les 3 dernieres villes recement ajouter
const q9 = query(citiesRef, orderBy("dateDajout", "desc"), limit(3));


/* ==> REQUET COMPOSER <== */
//Recuperer toute les ville de la Rd Congo dont la population est inferieur a 3M
const q10 = query(citiesRef, where("pays", '==', "Rd Congo"), where("population", '<', 3000000));

/* ==> REQUET DE GROUPE DES COLLECTIONs <== */

/* Reference de la sous-collection (NB: ID unique pour la sous-collection) */
const habitantRef=collectionGroup(db,"habitants");

//Recuperer tous les habitant disponible
const q11 = query(habitantRef);

//Recuperer les habitants feminin
const q12 = query(habitantRef, where("sexe", '==', "F"));


//RealTime update firestore ( mise a jour a temp reel de firestore)
onSnapshot(q12, (snapshot) => {
    let villes = [];
    snapshot.docs.forEach((doc) => {
        villes.push({ ...doc.data(), id: doc.id });
    })

    console.log(villes);
})