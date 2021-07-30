const mainContainer = document.querySelector("#main-container");

function createSquares(number, style) {
    if (style === "black") {
        for (let i = 1; i <= number ** 2; i++) {
            const playSquare = document.createElement("div");
            let startingBlack = 100;

            playSquare.className = "play-div";
            playSquare.style.backgroundColor = "hsl(0, 0%, 100%)";
            playSquare.addEventListener("mouseover", () => {
                // Changes square to random RGB on rollover
                /* playSquare.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`; */

                // Decreases square lightness by 10% per rollover
                /* startingBlack = decreaseHSL(startingBlack);
                playSquare.style.backgroundColor = `hsl(0, 0%, ${startingBlack}%)`; */

                playSquare.style.backgroundColor = "black";
            });

            mainContainer.appendChild(playSquare);
        }

    } else if (style ==="multicolor") {
        for (let i = 1; i <= number ** 2; i++) {
            const playSquare = document.createElement("div");
            let startingBlack = 100;

            playSquare.className = "play-div";
            playSquare.style.backgroundColor = "hsl(0, 0%, 100%)";
            playSquare.addEventListener("mouseover", () => {
                // Changes square to random RGB on rollover
                playSquare.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
            });

            mainContainer.appendChild(playSquare);
        }
    } else {
        for (let i = 1; i <= number ** 2; i++) {
            const playSquare = document.createElement("div");
            let startingBlack = 100;

            playSquare.className = "play-div";
            playSquare.style.backgroundColor = "hsl(0, 0%, 100%)";
            playSquare.addEventListener("mouseover", () => {
                // Decreases square lightness by 10% per rollover
                startingBlack = decreaseHSL(startingBlack);
                playSquare.style.backgroundColor = `hsl(0, 0%, ${startingBlack}%)`;

            });

            mainContainer.appendChild(playSquare);
        }
    }

    mainContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

function randomRGB() {
    let randomRGB = Math.trunc(Math.random() * 255);
    return randomRGB;
}

function decreaseHSL(input) {
    if (input == 0) {
        return input;
    } else {
        let newInput = input - 10;
        return Number(newInput);
    }
}

function resetGrid(style) {
    let allSquares = document.querySelectorAll(".play-div");
    let userInput = prompt("How many squares on each side? (Max. 100)", "");
    let userNumber = Number(userInput);

    if (userNumber <= 100) {
        mainContainer.textContent = "";
        createSquares(userNumber, style);
    } else if (userInput === "") {
        mainContainer.textContent = "";
        createSquares(16, style);
    } else if (userNumber > 100) {
        alert("I SAID LESS THAN 100.");
    } else if (userNumber < 0) {
        alert("WHAT? WHY.")
    } 
}

function addButtonFunctions() {
    const resetButton = document.querySelector("#reset-button");
    const multicolorButton = document.querySelector("#multicolor-button");
    const monochromeButton = document.querySelector("#monochrome-button");
    const buttonsDiv = document.querySelector("#buttons-div");

    resetButton.addEventListener("click", () => {
        resetGrid("black");
    });
    resetButton.addEventListener("mouseover", () => {
        resetButton.style.backgroundColor = `black`;
        resetButton.style.color = "white";
        resetButton.style.border = "solid 5px white";
    });
    resetButton.addEventListener("mouseout", () => {
        resetButton.style.backgroundColor = "white";
        resetButton.style.color = "black";
        resetButton.style.border = "solid 5px black";
    });

    multicolorButton.addEventListener("click", () => {
        resetGrid("multicolor");
    });

    // Changes button background color to random RGB upon hover, then reverts when hover stops.
    multicolorButton.addEventListener("mouseover", () => {
        multicolorButton.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    });
    multicolorButton.addEventListener("mouseout", () => {
        multicolorButton.style.backgroundColor = "white";
    });
    
    monochromeButton.addEventListener("click", () => {
        resetGrid("shade");
    });

    // Reverses color scheme upon hover, then reverts when hover stops.
    monochromeButton.addEventListener("mouseover", () => {
        monochromeButton.style.background = "linear-gradient(90deg,white 50%, black 50%, black)";
    });
    monochromeButton.addEventListener("mouseout", () => {
        monochromeButton.style.background = "linear-gradient(90deg,black 50%, white 50%, white)";
    });
}

addButtonFunctions();
createSquares(16, "black");

// TO DO: MAKE BUTTON PROMPT USER FOR NUMBER, WHICH IS USED FOR GRID.
// TO DO: ADD COMMENTS AND STUFF.
// CHECK ANY OTHER TO DO'S ON THE T.O.P. PAGE.