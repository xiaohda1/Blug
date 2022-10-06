import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCl7RMLtNBHYuvKqZZRYXoNorCMJHnBMcw",
    authDomain: "myweb-d1a50.firebaseapp.com",
    projectId: "myweb-d1a50",
    storageBucket: "myweb-d1a50.appspot.com",
    messagingSenderId: "88736043847",
    appId: "1:88736043847:web:6db46236ae0deda4663262"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  // for getting server time after created 'things'
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }