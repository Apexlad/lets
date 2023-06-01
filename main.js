var firebaseConfig = {
    apiKey: "AIzaSyBSpWPzFM4qPRUqnWKTjfFB3Kg3loZxox4",
    authDomain: "let-chat-web-app-eb32a.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-eb32a-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-eb32a",
    storageBucket: "let-chat-web-app-eb32a.appspot.com",
    messagingSenderId: "361079847033",
    appId: "1:361079847033:web:76e6717d5092bfe3ef3ca8",
    measurementId: "G-46LFWFHP94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function Log_in() {
    user_name = document.getElementById("room_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chatroom.html";
} 

var firebaseConfig = {
        apiKey: "AIzaSyBsyCUsDUho7XXLz4AEUf3Ghg8Aazhz65E",
        authDomain: "let-s-chat-247b3.firebaseapp.com",
        databaseURL: "https://let-s-chat-247b3-default-rtdb.firebaseio.com",
        projectId: "let-s-chat-247b3",
        storageBucket: "let-s-chat-247b3.appspot.com",
        messagingSenderId: "611688939910",
        appId: "1:611688939910:web:404cf3bb7f00ea2d576c07"
      };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();