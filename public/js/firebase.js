let firebaseConfig = {
    apiKey: "AIzaSyDeslxFssYfc_Tv1RwwX7pusQZ2fplismQ",
    authDomain: "projeto-iihc-frontend.firebaseapp.com",
    projectId: "projeto-iihc-frontend",
    storageBucket: "projeto-iihc-frontend.appspot.com",
    messagingSenderId: "925734269522",
    appId: "1:925734269522:web:f086a82ee35da2fbdd658b",
    measurementId: "G-PEGTPCGT5Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore();
  