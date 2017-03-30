function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeColor() {
  var colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'black'];
  var color = colors[randNumber(0,  colors.length - 1)];
  $("#text").css("color", color);
}

$("#color-button").click(changeColor);