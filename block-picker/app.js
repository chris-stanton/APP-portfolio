$(document).ready(function() {   //ready is an event, when event is complete, run annonymous function "event listener"

//empty array to hold the colors
var colors = [];

function Color(name, color) {
  this.name = name;
  this.color = color;
}

var red = new Color("red", "red");
var green = new Color("green", "green");
var blue = new Color("blue", "blue");
var yellow = new Color("yellow", "yellow");
var black = new Color("black", "black");

colors.push(red);
colors.push(green);
colors.push(blue);
colors.push(yellow);
colors.push(black);


//appending blocks to DOM
$('.redblock').append('<div class ="block" id="red"' + "<p></p>");
$('.greenblock').append('<div class ="block" id="green"' + "<p></p>");
$('.blueblock').append('<div class ="block" id="blue"' + "<p></p>");
$('.yellowblock').append('<div class ="block" id="yellow"' + "<p></p>");

var newColor = randomNumber(0, 3);

resetPage();
function resetPage() {

  //assigns random number to a color
  newColor = randomNumber(0, 3);
  console.log(newColor);
  if (newColor == 0){
    newColor = "red";
  }  else if (newColor == 1) {
    newColor = "green";
  }  else if (newColor == 2) {
    newColor = "yellow";
  }  else if (newColor == 3) {
    newColor = "blue";
  }
  //appends that color to the DOM
  $('.colorPicked').append('<h2>Please select the ' + newColor + ' block!</h2>');

}

//on Block Click

$('.redblock').on('click', function() {
  if (newColor == "red") {

    $('.colorPicked').append("<p>You picked correctly Red!</p>");
      $('.colorPicked').empty();
    resetPage();
  } else {
    $('.colorPicked').append("<p> You Picked Red! </p>");
  }
});

$('.greenblock').on('click', function() {
  if (newColor == "green") {

    $('.colorPicked').append("<p>You correctly picked Green!</p>");
    $('.colorPicked').empty();
    resetPage();
  } else {
    $('.colorPicked').append("<p> You Picked Green! </p>");
  }
});

$('.blueblock').on('click', function() {
  if (newColor == "blue") {

    $('.colorPicked').append("<p>You correctly picked Blue!</p>");
    $('.colorPicked').empty();
    resetPage();
  } else {
    $('.colorPicked').append("<p> You Picked Blue! </p>");
  }
});

$('.yellowblock').on('click', function() {
  if (newColor == "yellow") {

    $('.colorPicked').append("<p>You correctly picked Yellow!</p>");
    $('.colorPicked').empty();
    resetPage();
  } else {
    $('.colorPicked').append("<p> You Picked Yellow! </p>");
  }
});

// Here is a handy function to generate a random number given a minimum and maximum.
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
});
