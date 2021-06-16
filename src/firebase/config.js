import firebase from 'firebase' //generic firebase(doesn't know which project to work with)

//telling firebase project to work with this particular project.
const firebaseConfig = {
    apiKey: "AIzaSyCBTaj3XZEave_kEsNPacthIxewJoySn-w",
    authDomain: "notesapp-848cd.firebaseapp.com",
    projectId: "notesapp-848cd",
    storageBucket: "notesapp-848cd.appspot.com",
    messagingSenderId: "302318815768",
    appId: "1:302318815768:web:2953be0c6e2af3dfb3116d"
  };
  
firebase.initializeApp(firebaseConfig)//telling firebase which project to work it

export default firebase;//exporting the firebase linked to the project