// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdKEReT6ys5xu0QyqmIek3TpX5eM1vP2s",
    authDomain: "classtest-c8fa8.firebaseapp.com",
    projectId: "classtest-c8fa8",
    storageBucket: "classtest-c8fa8.appspot.com",
    messagingSenderId: "169812638875",
    appId: "1:169812638875:web:b8483249287b60532bda3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addroom(){
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
consolelog(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}