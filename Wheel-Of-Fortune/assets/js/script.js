var phrase = "  A  Very   Cool Test ";
var capsPhrase = phrase.toUpperCase();
var letterArray = capsPhrase.split("");
console.log(letterArray);

var gridDivs = document.querySelectorAll(".blank");

letterArray.forEach(function (letter, index) {
  var h2El = document.createElement("h2");
  gridDivs[index].setAttribute("data-letter", letter);
  // gridDivs[index].setAttribute("class", "inactive")
  h2El.setAttribute("class", "letter");
  if(letter !== " ") {
      gridDivs[index].style.backgroundColor = "white"
  }
  // h2El.style.display="none"
  gridDivs[index].appendChild(h2El);
});

document.addEventListener("keyup", function (event) {
  var targetLetter = event.key;
  var response = letterArray.indexOf(targetLetter);
  console.log(response);
});
