"use strict";

// ["1=one", "2=two", "3=three"].forEach(alert);

// const userName = "puspendu";
// var age = 27;
// let myText = "Hello world! - myTest variable",
//   place = "India";
// [
//   `text = ${myText}`,
//   `my name is ${userName}, age = ${age} and I am from ${place}`,
// ].forEach(alert);


let dob = prompt("Enter your date of birth(as ddmmyyyy)");
function _calculateAge(birthday) {
  var year = Number(birthday.substr(4, 4));
  var month = Number(birthday.substr(2, 2)) - 1;
  var day = Number(birthday.substr(0, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
  }
  return age;
}

let age = _calculateAge(dob);
alert(`You are ${age} years old!`);
