var numSquares =6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisplay");
var resultDisp = document.getElementById("result");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyLevel = document.getElementById("easy");
var hardLevel = document.getElementById("hard");
pickedColor = pickColor();
colorDisp.textContent = pickedColor;


//New Colors Button - reset
resetButton.addEventListener("click", function(){
    resultDisp.textContent = "";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    //add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
}
    
        resetButton.textContent = "New Colors";
        h1.style.backgroundColor = "#232323";
})


//Easy Button
easyLevel.addEventListener("click", function(){
    resultDisp.textContent = "";
    hardLevel.classList.remove("selected");
    easyLevel.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
        squares[i].style.backgroundColor = colors[i];
    }else{
        squares[i].style.display = "none";
    }
    }
})


//Hard Button
hardLevel.addEventListener("click", function(){
    resultDisp.textContent = "";
    hardLevel.classList.add("selected")
    easyLevel.classList.remove("selected");
    numSquares =6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})


//the Squares code
for (var i = 0; i < squares.length; i++) {
    //add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];    
    //add click listners to the Squares
    squares[i].addEventListener("click", function(){
    //grab color of the clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        resultDisp.textContent = "Winner";
        changeColors(clickedColor);
        h1.style.backgroundColor= clickedColor;
        resetButton.textContent = "play Again?";
    }else{
        this.style.backgroundColor = "#232323";
        resultDisp.textContent = "Try Again!";

    }
    });
}
// changing the colors
function changeColors(color) {
    //loop through all Colors
 for (var i = 0; i < squares.length; i++){
    //match the colors to the given color
    squares[i].style.backgroundColor = color;
 }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generating random colors
function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for (i=0; i< num; i++) {
        //push a random color into the array
       arr.push(generateColors())
    }
    return arr;
}
function generateColors() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r +", " + g + ", " + b + ")";   
}

