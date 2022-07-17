import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1VSFzZWQRYA8klooqmVth4LKJxkYIzzo",
  authDomain: "loginsignup-eb8ee.firebaseapp.com",
  projectId: "loginsignup-eb8ee",
  storageBucket: "loginsignup-eb8ee.appspot.com",
  messagingSenderId: "462338153450",
  appId: "1:462338153450:web:3181fd1e0f1f63dfbab093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


async function register(form) {
    const {email, password, name} = form
    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, "users"), {
        name, email
      });
      return;
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });
}

export {
    register,
    login
}