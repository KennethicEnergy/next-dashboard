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

const db = getFirestore(firebaseApp);
const collectionRef = collection(db, "users");

export const updateUserByDocumentId = async (documentId: string) => {
	const userDocumentRef = doc(db, "users", documentId);
	await updateDoc(userDocumentRef, {
		field1: "newValue1",
		field2: "newValue2",
	});
};

export const addUser = async () => {
	const docRef = await addDoc(collectionRef, {
		field1: "value1",
		field2: "value2",
		field3: "value3",
	});
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

	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => `, doc.data());
	});
};
