

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBMQYddykEPjx5up4SMTo_ya5k3JKamKHU",
      authDomain: "kwitter-60f89.firebaseapp.com",
      databaseURL: "https://kwitter-60f89-default-rtdb.firebaseio.com",
      projectId: "kwitter-60f89",
      storageBucket: "kwitter-60f89.appspot.com",
      messagingSenderId: "295366994671",
      appId: "1:295366994671:web:792f21365a5133f1a5491a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    function add_room() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        dash:"let's zoom"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name is = "+room_name);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}