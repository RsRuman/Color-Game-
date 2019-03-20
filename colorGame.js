var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var hColor = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBTN");
var hardButton = document.querySelector("#hardBTN");


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selectedButton");
    hardButton.classList.remove("selectedButton");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++)
        {
            if(colors[i])
                {
                    squares[i].style.background = colors[i];
                }
            else
                {
                    squares[i].style.display = "none";
                }
        }
    message.textContent = " ";
    reset.textContent = "New Color";
})

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selectedButton");
    easyButton.classList.remove("selectedButton");
    numSquares = 6
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++)
        {
            if(colors[i])
                {
                    squares[i].style.background = colors[i];

                    squares[i].style.display = "block";
                }
        }
    message.textContent = " ";
    reset.textContent = "New Color";
})

reset.addEventListener("click", function(){
    //generate new color
    colors = generateRandomColor(numSquares);
    //pick a new color
    pickedColor = pickColor();
    //change pick color context
    colorDisplay.textContent = pickedColor;
    // changes all squres color
    for(var i = 0; i < squares.length; i++)
        {
            squares[i].style.background = colors[i];

        }
    //Need to change the h1 background color also
    hColor.style.background = "steelblue";
    message.textContent = " ";
    this.textContent = "New Color";
});



colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++)
    {
        squares[i].style.background = colors[i];
        
        squares[i].addEventListener ("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor)
                {
                    message.textContent = "Correct!";
                    changeColor(clickedColor);
                    hColor.style.background = clickedColor;
                    reset.textContent = "Play Again";
                }
            else
                {
                    this.style.background = "#232323";
                    message.textContent = "Incorrect!";
                }
        });
    }
        
        function changeColor(color)
        {
            for(var i = 0; i < squares.length; i++)
            {
                squares[i].style.background = color;
            }
        }
        function pickColor()
            {
               var random = Math.floor(Math.random() * colors.length)
               return colors[random];
            }

function generateRandomColor(num)
{
    //need to create an array
    var arr = [];
    //get random array
    for(var i = 0; i < num; i++)
        {
            arr.push(randomColor());
        }
    
    //return array
    return arr;
}
function randomColor()
{
    //For red
    var r = Math.floor(Math.random() * 256);
    //for blue
    var b = Math.floor(Math.random() * 256);
    //For green
    var g = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " +  g + ", " +  b + ")";
}