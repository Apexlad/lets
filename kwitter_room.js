
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyATyotD49y1d_m1_2hml8-7V81boTSQLfE",
      authDomain: "kwitter-4c740.firebaseapp.com",
      databaseURL: "https://kwitter-4c740-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c740",
      storageBucket: "kwitter-4c740.appspot.com",
      messagingSenderId: "381123796961",
      appId: "1:381123796961:web:f60c41cacb820b5280fca0"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
  
function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding username"
      });
      localStorage.setItem("room_name", roomname);
      window.location="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoom(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}

getData();
function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name")
      window.location="index.html";



}
