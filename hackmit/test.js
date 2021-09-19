// let users = [];
// let fullUsers = {};
// let db = firebase.firestore();
// let myUserId;

// // map variables
// let mapMarkers;
// var myMap;
// var canvas;
// var mappa = new Mappa("Leaflet");
// var options = {
//   lat: 42.35994556160397,
//   lng: -71.06230261247704,
//   zoom: 4,
//   style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
// };

// // Code here runs only once.
// function setup() {
//   // canvas = (640,640);
//   canvas = createCanvas(windowWidth, windowHeight);
//   myMap = mappa.tileMap(options);
//   myMap.overlay(canvas);
//   fill(200, 100, 100);
//   mapMarkers = [[36.98271592687065, -86.4776110385736], [40, -80]];

//   // Only redraw the point when the map change and not every frame.

//   let newUser = new User();
//   users.push(newUser);

//   myMap.onChange(drawPoint);
//   //createMyUser();

//   db.collection("users").onSnapshot(querySnapshot => {
//     users = [];

//     for (let i = 0; i <= users.length; i++) {
//       let currentUser = users[i];
 
//     }
//     querySnapshot.forEach(user => {
//       users.push(user.data());

//       let currentUser = user.data();
//       let marker = L.marker([
//         10,
//         -5
//       ]).addTo(myMap.map);
      
//       marker.bindPopup(
//         // "<b>Gloria Huang</b><br>School: currentUser.MIT<br>Instagram: @gloriahuangg"
//         "<b> Name: " +
//           currentUser.name +
//           "</b><br>School: " +
//           currentUser.school +
//           "<br>Instagram: " +
//           currentUser.socials +
//           "</b>" +
//           "<br>Age: " +
//           currentUser.age +
//           "</b>"
//       );
//       //console.log(users);
//       // text(user, 30, 40);
//     });
//   });
// }

// class User {
//   constructor() {
//     // this.username = prompt("what is your name?");
//     // this.userage = prompt("what is your age?");
//     // this.usersocial = prompt("Paste a link to your instagram");
//     // this.userschool = prompt("What school do you attend?");
//     // this.lat = prompt("what is your lat?");
//     // this.long = prompt("what is your long?");
//     this.username = "what is your name?";

//     this.addToFireBase();
//   }

//   addToFireBase() {
//     firebase
//       .firestore()
//       .collection("users")
//       .add({
//         age: this.userage,
//         school: this.userschool,
//         location: new firebase.firestore.GeoPoint(this.lat, this.long),
//         name: this.username,
//         socials: this.usersocial,
//         time: new Date()
//       })
//       .then(docRef => {
//         myUserId = docRef.id;
//         console.log(myUserId);
//       });
//   }
// }

// //Code here runs continuously.
// function draw() {
//   // background(220);

//   for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     //text(user, 30, 30);
//     //console.log(user);
//   }
// }


let ms;
var myMap;
var lat;
var long;
var canvas;
let name = prompt("What is your name?")
let location = prompt("What is your location?")
let trash = prompt("What is your trash(landfill, recycling, compost, hazardous)?")
let trashAmount = prompt("How much trash?")
var mappa = new Mappa("Leaflet");
var options = {
  lat: 42.35994556160397,
  lng: -71.06230261247704,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

function setup() {
  canvas = createCanvas(640, 640);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  fill(200, 100, 100);
  ms = [[36.98271592687065, -86.4776110385736], [40,-80]];
  getLocation();

  console.log(lat);

  // Only redraw the point when the map change and not every frame.
  myMap.onChange(drawPoint);
  //drawPoint(36.98271592687065, -86.4776110385736);
}

function draw() {
  //drawPoint(36.98271592687065, -86.4776110385736);
}

function drawPoint() {
  clear();
  
  for (let i = 0; i<= ms.length; i++) {
    console.log(ms[i]);
    let marker = L.marker([
        lat,
        long
      ]).addTo(myMap.map);
    marker.bindPopup(  
    "<b> Name: " +
          name +
          "</b><br>School: " +
          location +
          "<br>Instagram: " +
          trash +
          "</b>" +
          "<br>Age: " +
          trashAmount +
          "</b>");

  }

  //let marker = L.marker([lat, long]).addTo(myMap.map);
  //let marker = L.marker([36.98271592687065, -86.4776110385736]).addTo(myMap.map);

  //let marker2 = L.marker([45, -80]).addTo(myMap.map);
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
}

