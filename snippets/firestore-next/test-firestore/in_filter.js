// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/in_filter.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_in_filter]
import { query, where } from "firebase/firestore";

const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));
// [END modular_in_filter]