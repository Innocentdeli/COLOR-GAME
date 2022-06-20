var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButton();
  setupSquares();
  reset();
}

function setupModeButton(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    })
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listener to squares
    squares[i].addEventListener("click", function(){
      //grap color of clicked square
  var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        resetButton.textContent = "Play Again"
        messageDisplay.textContent = "Correct";
        h1.style.backgroundColor = clickedColor;
        changeColors(clickedColor);
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }
}


function reset(){
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick new random colors from array
  pickedColor = pickColor();
  //change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
    //change colors for squares
  for (var l = 0; l < squares.length; l++){
    if(colors[l]){
      squares[l].style.display = "block"
      squares[l].style.backgroundColor = colors[l];
    } else {
      squares[l].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function(){
reset();
})

function changeColors(color){
  //loop through all squares
  for(var j in squares){
    //change each color to match the given color
    squares[j].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()* colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //add random color to array
  for (var k = 0; k < num; k++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
