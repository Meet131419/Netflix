// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyALKXV46GDxtlqovTuvcuug1qGlWmYyxHI",
    authDomain: "netflix-619c2.firebaseapp.com",
    projectId: "netflix-619c2",
    storageBucket: "netflix-619c2.appspot.com",
    messagingSenderId: "1090078811281",
    appId: "1:1090078811281:web:5ef7caf9dabf344d214b30",
    measurementId: "G-ESHZCPNS32"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore()
  const auth = firebase.auth()

  export { auth}
  export default db