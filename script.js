const mainContainer = document.querySelector("#main-container");

function createSquares(number) {
    for (let i = 1; i <= number ** 2; i++) {
        const playSquare = document.createElement("div");
        playSquare.className = "play-div";
        playSquare.addEventListener("mouseover", () => {
            playSquare.style.backgroundColor = "black";
        });

        mainContainer.appendChild(playSquare);
    }

    mainContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
}

function removeGrid() {
    let allSquares = document.querySelectorAll(".play-div");

    document.body.removeChild("#main-container");
}

function resetGrid() {
    let allSquares = document.querySelectorAll(".play-div");
    let userInput = Number(prompt("How many squares on each side? (Max. 100)", ""));

    removeGrid();
}

function addButton() {
    const resetButton = document.createElement("button");

    resetButton.textContent = "Reset";
    resetButton.id = "reset-button";
/*     resetButton.addEventListener("click", () => {
        resetGrid();
    }); */

    document.body.appendChild(resetButton);
}

addButton();
createSquares(16);

// TO DO: MAKE BUTTON PROMPT USER FOR NUMBER, WHICH IS USED FOR GRID.
// TO DO: ADD COMMENTS AND STUFF.
// CHECK ANY OTHER TO DO'S ON THE T.O.P. PAGE.