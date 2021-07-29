const mainContainer = document.querySelector("#main-container");

function createSquares(number) {
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

function resetGrid() {
    let allSquares = document.querySelectorAll(".play-div");
    let userInput = Number(prompt("How many squares on each side? (Max. 100)", ""));

    if (userInput <= 100) {
    mainContainer.textContent = "";
    createSquares(userInput);
    } else if (userInput > 100) {
        alert("I SAID LESS THAN 100.");
    } else if (userInput < 0 || typeof userInput != Number) {
        alert("WHAT? WHY.")
    }
}

function addButton() {
    const resetButton = document.createElement("button");

    resetButton.textContent = "Reset";
    resetButton.id = "reset-button";
    resetButton.addEventListener("click", () => {
        resetGrid();
    });

    document.body.appendChild(resetButton);
}

addButton();
createSquares(16);

// TO DO: MAKE BUTTON PROMPT USER FOR NUMBER, WHICH IS USED FOR GRID.
// TO DO: ADD COMMENTS AND STUFF.
// CHECK ANY OTHER TO DO'S ON THE T.O.P. PAGE.