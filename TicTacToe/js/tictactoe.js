//variable keeps track of players turn.
let activePlayer = 'X';
//array stores an array of moves. Used to determin  win conditions.
let selectedSquares = [];

//This function is for placing X or O in square.
function placeXOrO(squareNumber) {
    //condition ensures  square hasn't been selected
    //the .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //Checks who turn it is
        if (activePlayer === 'X') {
            //If activePlayer is equal to X, the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/X200.png")';

        } else {
            //active player  must be O
            select.style.backgroundImage = 'url("images/O200.png")';
        }
        //squareNumber and activePlayer are concat together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //calls function to check for win conditions.
        checkWinConditions();
        //condition for changing active players.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //function plays sound
        audio('./media/impact.mp3');
        //Xhecks to see if computer turn
        if (activePlayer === 'O') {
            //disables clicking for computer choice
            disableClick();
            //waits to place image and enables click.
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //returning true is needed for our computersTurn() function to work.
        return true;
    }
    //causes random square to be selected
    function computersTurn() {
        //boolean need for while loop
        let success = false;
        //variable stores random number 0-8
        let pickASquare;
        //lets keep trying if square is already selected
        while (!success) {
            //random number selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number eval returns true, the square is free
            if (placeXOrO(pickASquare)) {
                //calls function
                placeXOrO(pickASquare);
                //changes boolean and ends loop
                success = true;
            }
        }
    }

}

function checkWinConditions() {
    //X0,1,2 condition.
    if (arrayIncludes('OX', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100)
    }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //Checks for tie
    else if (selectedSquares.length >= 9) {
        audio('./media/meow.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
}

//funtion checks if an array includes 3 stringer. Used to check win conditions
function arrayIncludes(squareA, squareB, squareC) {
    //3 var used to check for 3 in a row.
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    //if the 3 var we pass are all included in our array true is returned and our 
    if (a === true && b === true && c == true) { return true }
}

//Function makes body element temporarily unclickable
function disableClick() {
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes body clickable again
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//this function takes a string parameter of the path you set earlier for placement sound
function audio(audioURL) {
    //creat a new audio object and pass the path as a parameter
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //This varible stores temporary x axis data we update in our animation loop.
        x = x1,
        y = y1;

    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba (50,205,50,.8)';
        //method draws everything laid out above.
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

    }

    //Clears canvas after win line
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop)
    }
    disableClick();
    audio('./media/winner.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];

}
