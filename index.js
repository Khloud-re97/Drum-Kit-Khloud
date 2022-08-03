var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",buttonClick);
  function buttonClick(){
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  }
}
// أشوف لو أي زر انضغط بشكل عام
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(keyp){
  switch (keyp){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // New Object from the Audio constructor function
      tom1.play(); // Method
    break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); // New Object from the Audio constructor function
      tom2.play(); // Method
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3"); // New Object from the Audio constructor function
      tom3.play(); // Method
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3"); // New Object from the Audio constructor function
      tom4.play(); // Method
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3"); // New Object from the Audio constructor function
      snare.play(); // Method
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3"); // New Object from the Audio constructor function
      crash.play(); // Method
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3"); // New Object from the Audio constructor function 
      kick.play(); // Method
      break;
    default: console.log(buttonInnerHTML);

  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
