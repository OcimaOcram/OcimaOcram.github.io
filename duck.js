// const duck = document.getElementById("duck");
// const container = document.getElementById("duck-container");

// let directionX = Math.random() - Math.random();// set initial X direction randomly
// let directionY = Math.random() - Math.random() // set initial Y direction randomly

// duck.style.setProperty("--direction-x", directionX);
// duck.style.setProperty("--direction-y", directionY);

// duck.addEventListener("click", () => {
//     directionX = Math.random() - Math.random();// set new X direction randomly
//     directionY = Math.random() - Math.random(); // set new Y direction randomly
//     duck.style.setProperty("--direction-x", directionX);
//     duck.style.setProperty("--direction-y", directionY);
// });
$(document).mousemove(function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var duckX = $('#duck-container').offset().left + ($('#duck-container').width() / 2);
    var duckY = $('#duck-container').offset().top + ($('#duck-container').height() / 2);
  
    var offsetX = mouseX - duckX -100;
    var offsetY = mouseY - duckY;
  
    var magnitude = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
    var vectorX = offsetX / magnitude;
    var vectorY = offsetY / magnitude;
  
    var speed = 1;
  
    var newDuckX = duckX + (vectorX * speed);
    var newDuckY = duckY + (vectorY * speed);
  
    $('#duck-container').offset({ top: newDuckY - ($('#duck-container').height() / 2), left: newDuckX - ($('#duck-container').width() / 2) });
  });
  