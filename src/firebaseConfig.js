import { GoogleGenerativeAI } from "@google/generative-ai";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfyBO37Hlr5miCbqP07S_sARXlyn-koE0",
  authDomain: "recipe-organizer-web-app.firebaseapp.com",
  projectId: "recipe-organizer-web-app",
  storageBucket: "recipe-organizer-web-app.firebasestorage.app",
  messagingSenderId: "50151959549",
  appId: "1:50151959549:web:db1fdab4a07df76e140794",
  measurementId: "G-W0GN1DPC4Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let genAI, model, apiKey;

async function initializeApi() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    apiKey = snapshot.data().key;
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("API key initialized and model set.");
    return model;
  } catch (error) {
    console.error("Error getting API key:", error);
  }
}

initializeApi().catch((err) =>
  console.error("Error during initialization:", err)
);

export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  initializeApi,
  model,
};
