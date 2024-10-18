
  const firebaseConfig = {

  apiKey: "AIzaSyACpqYkBR3YDcpUzO-6CztORv5R8rCmgeo",

  authDomain: "grad-sampleq.firebaseapp.com",

  databaseURL: "https://grad-sampleq-default-rtdb.firebaseio.com",

  projectId: "grad-sampleq",

  storageBucket: "grad-sampleq.appspot.com",

  messagingSenderId: "286307129680",

  appId: "1:286307129680:web:ffec76418f3241683d3455"

};

  
  firebase.initializeApp(firebaseConfig);  
  var rootRef = firebase.database().ref();