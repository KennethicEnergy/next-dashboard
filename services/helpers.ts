import {
	doc,
	getDoc,
	setDoc,
	updateDoc,
	getFirestore,
	collection,
	addDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { firebaseApp } from "@/firebase-app-config";
import { FirebaseNextJSContextType } from "./types";

const db = getFirestore(firebaseApp);
const collectionRef = collection(db, "users");

export const updateUserByDocumentId = async (documentId: string) => {
	const userDocumentRef = doc(db, "users", documentId);
	await updateDoc(userDocumentRef, {
		field1: "newValue1",
		field2: "newValue2",
	});
};

export const addUser = async (role: string, user: FirebaseNextJSContextType) => {
	const docRef = await addDoc(collectionRef, { role, email: user.currentUser?.email });
	console.log("Document written with ID: ", docRef.id);
};

export const getAllUsers = async () => {
	const querySnapshot = await getDocs(collectionRef);
	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => `, doc.data());
	});
};

export const getUserById = async (documentId: string) => {
	const userDocumentRef = doc(db, "users", documentId);
	const docSnap = await getDoc(userDocumentRef);
	if (docSnap.exists()) {
		console.log("Document data:", docSnap.data());
	} else {
		console.log("No such document!");
	}
};

export const getUserByQuery = async (field: string, operation: any, value: unknown) => { // The operation string (e.g "<", "<=", "==", "<", "<=", "!=").
	const q = query(collectionRef, where(field, operation, value));
	const querySnapshot = await getDocs(q);

	const results: any[] = [];  // Create an array to store the results

	querySnapshot.forEach((doc) => {
		results.push({ id: doc.id, ...doc.data() });  // Store the document data in the array
	});

	return results;  // Return the results array
};