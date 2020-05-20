function example1() {
  alert("This is the first alert.");
  alert("This is the second alert.");
}

document.getElementById("demo").innerHTML = Date();

var value = document.getElementById("price1").value;

function checkRange() {
  var display = "none";

  var paragraphList = document.getElementsByTagName("p");
  var firstParagraph = paragraphList[1];
  if (value >= 80) {
    display = "block";
  }
  firstParagraph.style.display = display;
}

function computeTotal() {
  if (isNaN(value)) {
  }
}
