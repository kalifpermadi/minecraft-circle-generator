function run() {
    var diameter = document.getElementById("diameter").value;
    const grid = document.querySelector(".grid");
    const side = grid.clientWidth / diameter; // Calculate the size of the squares
    grid.innerHTML = ""; // Empty the grid
    for (let i = 0; i < diameter * diameter; i++) { // Insert diameter^2 white squares into the grid
        let div = document.createElement("div");
        div.style.cssText = `width:${side}px;height:${side}px`;
        grid.appendChild(div);
    }
    const squares = document.querySelectorAll(".grid div");
    for (let i = 0; i < diameter; i++) { // Make the circle by changing some of the squares to blue
        for (let j = 0; j < diameter; j++) {
            var x = (i - (diameter - 1) / 2) ** 2;
            var y = (j - (diameter - 1) / 2) ** 2;
            if (x + y <= (diameter / 2 - 0.05) ** 2) {
                squares[i * diameter + j].classList.add("circle");
            }
        }
    }
}