# etch-a-sketch
<b>==> [LIVE PREVIEW](https://jl37465.github.io/etch-a-sketch/) <== </b><br>
Etch-A-Sketch Project made with JavaScript as part of The Odin Project's curriculum.
<br><br>

<b>~~ MAIN AIMS ~~</b><br>
The main aim of this project was to better familiarise myself with DOM manipulation by using HTML, CSS and JavaScript. There was a particular focus on creating elements within the JavaScript file and then directly appending them into an existing div via a function instead of hard-coding the entire Etch-A-Sketch grid into the HTML file itself. I paid particular attention to the various event listeners required to successfully change the grid mode depending on which button was clicked by the user.
<br><br>

  <b>~~ CHALLENGES ~~</b><br>
One of the biggest challenges was having the sketch grid replace itself with the correct number of squares, as well as with the correct drawing mode. I achieved this by replacing the grid's content with an empty string, and then creating a new grid with the original function. This function also allowed for a parameter to detect which mode (all black, shading, random multicolor) was requested through the corresponding button's event listener and automatically adjust each individual square's rollover event listener accordingly.

Another difficulty was the design aspect, especially the buttons because I wanted them to change colour upon rollover, and then revert upon mouseout. I eventually used "mix-blend-mode: difference" to automatically contrast the font and button colour of the "Shading Mode" button, even when the colour scheme switched during rollover events.
<br><br>

  <b>~~ IMPROVEMENTS ~~</b><br>
For additional improvements, I would definitely implement some more effects, possibly animation, for mousing over the buttons to give them a more dynamic feel. I could also add a slight delay or gradual coloring of each square to make the drawing seem more smooth and natural.
