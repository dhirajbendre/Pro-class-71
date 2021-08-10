import * as firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDbdQFikKnMIilUMtxsAgxliRM2ymrAU68",
    authDomain: "wily-app-by-dhiraj.firebaseapp.com",
    projectId: "wily-app-by-dhiraj",
    storageBucket: "wily-app-by-dhiraj.appspot.com",
    messagingSenderId: "788431441751",
    appId: "1:788431441751:web:6694821bccf05814a9b812"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()

