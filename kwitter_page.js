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

  var username=localStorage.getItem("username")
  var roomname=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
//Start code
    name_1=message_data['name1'];
    message_1=message_data['message'];
    likes=message_data['like'];
    name_tag="<h4>"+name_1+"<img src='tick.png' class='user_tick'> </h4>";
    message_tag="<h4 class='message_head'>"+message_1+"</h4>";
    like_tag="<button class= 'btn btn-primary' id='"+firebase_message_id+"' value="+likes+" onclick='updatelike(this.id)'>";
    span_tag="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+likes+"</span> </button> <hr>";
    row=name_tag+message_tag+like_tag+span_tag;
    document.getElementById("output").innerHTML+=row;

//End code
 } });  }); }
getData();






  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name")
    window.location="index.html";
}

function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(roomname).push({
        name1:username, 
        message:msg,
        like:0

    });
    document.getElementById("message").innerHTML="";
}

function updatelike(message_id){
  console.log("like button clicked");
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  firebase.database().ref(roomname).child(message_id).update({
    like:updated_likes
  });
}

