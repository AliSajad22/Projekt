// let button = document.getElementById("btn");
// let ageInput = document.getElementById("age");

// zugreif zu value des Nutzer
// button.onclick = function () {
//   alert(ageInput.value);
// };

// button.onclick = function () {
//   if (ageInput.value >= 18) {
//     alert("Zugelassen");
//   }
//   if (ageInput.value < 18) {
//     alert("nicht Zugelassen");
//   }
// };

// button.onclick = function () {
//   if (ageInput.value >= 18) {
//     alert("über 18");
//   } else {
//     alert("unter 18");
//   }
// };

// if und if else

var numberInput = document.getElementById("number");
var button = document.getElementById("btn");
var resultBox = document.getElementById("result");

button.onclick = function () {
  if (numberInput.value % 2 == 0) {
    resultBox.innerText = "even number";
  } else {
    resultBox.innerText = "odd number";
  }
};
