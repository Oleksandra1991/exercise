function getHour() {
  var today = new Date();
  var hour = today.getHours();

  document.getElementsByClassName("button").innerHTML = hour;
  return hour;
}

function changeColor() {
  var hour = getHour();
  var isNight = (hour >= 15 || hour <= 6);

  if (isNight) {
    var container = document.getElementsByClassName("js-container");
    container[0].className += " darker";
  }
}
