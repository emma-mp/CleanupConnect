let users = [];
let fullUsers = {};
var db = firebase.firestore();
let myUserId;
var lat;
var long;
test();
// console.log("first" + lat);
// getLocation();
// console.log("test");
// showPosition(position);

// map variables
let mapMarkers;
var myMap;
var canvas;
var mappa = new Mappa("Leaflet");
var options = {
  lat: 42.35994556160397,
  lng: -71.06230261247704,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

// Code here runs only once.
function setup() {
  // canvas = (640,640);
  // canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  fill(200, 100, 100);
  mapMarkers = [[36.98271592687065, -86.4776110385736], [40, -80]];

  // Only redraw the point when the map change and not every frame.
  let newUser = new User(); 
  users.push(newUser);

// console.log("hi");

  myMap.onChange();
  // createMyUser();

  console.log("hi");

  // function test(){


  db.collection("users").onSnapshot(querySnapshot => {
    users = [];

    
    for (let i = 0; i <= users.length; i++) {
      let currentUser = users[i];
      
    }
    querySnapshot.forEach(user => {
      users.push(user.data());
      // let array = showPosition();
      console.log(1);
      let currentUser = user.data();
      let marker = L.marker([
        10,
        -2
      ]).addTo(myMap.map);

      
      
      marker.bindPopup(
        // "<b>Gloria Huang</b><br>School: currentUser.MIT<br>Instagram: @gloriahuangg"
        "<b> Name: " +
          currentUser.name +
          "</b><br>School: " +
          currentUser.school +
          "<br>Instagram: " +
          currentUser.socials +
          "</b>" +
          "<br>Age: " +
          currentUser.age +
          "</b>"
      );
      
    });
  });
}
}

// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
class User {
  constructor() {
    // this.username = prompt("what is your name?");
    // this.userage = prompt("what is your age?");
    // this.usersocial = prompt("Paste a link to your instagram");
    // this.userschool = prompt("What school do you attend?");
    // this.lat = prompt("what is your lat?");
    // this.long = prompt("what is your long?");

    this.username = "what is your name?";
    // this.userage = "what is your age?";
    // this.usersocial = "Paste a link to your instagram";
    // this.userschool = "What school do you attend?";
    // this.lat = "what is your lat?";
    // this.long = "what is your long?";

    this.addToFireBase();
  }

  addToFireBase() {
    firebase
      .firestore()
      .collection("spotted")
      .add({
        age: this.userage,
        school: this.userschool,
        location: new firebase.firestore.GeoPoint(this.lat, this.long),
        name: this.username,
        socials: this.usersocial,
        time: new Date()
      })
      .then(docRef => {
        myUserId = docRef.id;
        console.log(myUserId);
      });
  }
}

//Code here runs continuously.
function draw() {
  // background(220);

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    //text(user, 30, 30);
    //console.log(user);
  }
}


var x = document.getElementById("demo");
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    
  }

  // let lat = position.coords.latitude;
  // let long = position.coords.longitude;
  // console.log(lat);
  // console.log(long);



  function showPosition(position) {

  lat = position.coords.latitude;
  long = position.coords.longitude;
  console.log(lat);
  console.log(long);

  // return [lat,long];

    // lat = position.coords.latitude;
    // long = position.coords.longitude;
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    // console.log(lat);
    // console.log(long);




  }


