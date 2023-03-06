

function player(e) {
  
  var btnInnerHTML = e;

  switch (btnInnerHTML) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      default: console.log(btnInnerHTML);
  }
}

// function colorChanger(e) {
//   var currentKey = e;
//   document.querySelector("." + currentKey).setAttribute("style", "color:white");
//   document.querySelector("." + currentKey).classList.add("pressed");
  
// }

function colorChanger(e) {
  var currentKey = e;
  document.querySelector("." + currentKey).setAttribute("style", "color:white");
  document.querySelector("." + currentKey).classList.add("pressed");
  
  setTimeout(function(){
    document.querySelector("." + currentKey).classList.remove("pressed");
    document.querySelector("." + currentKey).setAttribute("style", "color:none");
  }, 150);
}


var ears = document.addEventListener("keypress", function(e){
  player(e.key)
  colorChanger(e.key)

  console.log(e.key);   
})



var numButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", player);

  document
    .querySelectorAll("button")[i]
    .addEventListener("click", colorChanger);
  console.log(document.querySelectorAll("button")[i]);
}



function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton

}