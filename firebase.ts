// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACg4OK6_3950W2pHGQkxek0pUT-xRfo98",
    authDomain: "netflix-proj01md06.firebaseapp.com",
    projectId: "netflix-proj01md06",
    storageBucket: "netflix-proj01md06.appspot.com",
    messagingSenderId: "872569997754",
    appId: "1:872569997754:web:d85ae1d01fc8555b653583"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }