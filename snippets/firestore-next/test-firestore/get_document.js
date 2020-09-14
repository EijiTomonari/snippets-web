// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/get_document.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_get_document]
import { collection, doc, getDoc } from "firebase/firestore";

const docRef = doc(collection(db, "cities"), "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
// [END modular_get_document]