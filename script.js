console.log("datamaskin");
var firebaseConfig = {
  apiKey: "AIzaSyB51W06m78vOPwonjgaQCAKnVoTlxZFyJo",
  authDomain: "personregisterosv.firebaseapp.com",
  projectId: "personregisterosv",
  storageBucket: "personregisterosv.appspot.com",
  messagingSenderId: "71261859296",
  appId: "1:71261859296:web:ee238fe66987702295cf85",
  measurementId: "G-TE4MV920PR",
};

firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();
const UL = document.querySelector("UL");

console.log(UL);
console.log("før spøring");
database.collection("Personregister").onSnapshot((collection) => {
    UL.innerHTML =""
    collection.docs.forEach((doc) => {
      console.log(doc.data().Navn);
      UL.innerHTML += `
        <li>${doc.data().Navn} Adresse:${doc.data().Adresse} ${doc.data().Personnummer}</li> 
        `;
    });

    console.log(collection.docs);
    console.log("spøring fullført");
  });
console.log("etter spøring");

let kommentar = document.querySelector("#input")
let knappen = document.querySelector("#knapp")

 function addNewElement(collection, object = {}) {
  return database.collection(collection).add(object);
}


 function saveForm(e) {
  e.preventDefault();
  const obj = Object.fromEntries(new FormData(e.target));
  addNewElement(
      "Personregister",
      obj
  );
}







































