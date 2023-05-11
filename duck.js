const duck = document.getElementById("duck");
const container = document.getElementById("duck-container");

let directionX = Math.random() - Math.random();// set initial X direction randomly
let directionY = Math.random() - Math.random() // set initial Y direction randomly

duck.style.setProperty("--direction-x", directionX);
duck.style.setProperty("--direction-y", directionY);

duck.addEventListener("click", () => {
    directionX = Math.random() - Math.random();// set new X direction randomly
    directionY = Math.random() - Math.random(); // set new Y direction randomly
    duck.style.setProperty("--direction-x", directionX);
    duck.style.setProperty("--direction-y", directionY);
});