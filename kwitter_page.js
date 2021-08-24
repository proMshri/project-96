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
    room_name=localStorage.getItem("room_name");
    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                user_name:user_name,
                msg:msg,
                like:0
          })
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data['user_name'];
      message=message_data['msg'];
      like=message_data['like'];

      user_name_tag="<h4>"+name+" <img class='user_tick' src='tick.png'> </h4>";
      message_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_tag="<button class='btn btn-info' id="+firebase_message_id+"value="+like+"onclick='uptateLike(this.id)'>";
      like2_tag="<span class='glyphicon glyphicon-thumbs-up' >like: "+like+"</span> </button> <hr>";
      row=user_name_tag+message_tag+like_tag+like2_tag;
      
      document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function uptateLike(message_id){
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;

      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }

