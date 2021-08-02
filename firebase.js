import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAEHj8dGVXQCK2IaBmxQ0JNnbGLJeSkWEU",
    authDomain: "fir-12f13.firebaseapp.com",
    projectId: "fir-12f13",
    storageBucket: "fir-12f13.appspot.com",
    messagingSenderId: "887299841077",
    appId: "1:887299841077:web:610c117103cac23d43e57c"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app()

  const db = app.firestore()
  
  export default db