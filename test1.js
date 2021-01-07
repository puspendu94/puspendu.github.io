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
  try {
    var year = Number(birthday.substr(4, 4));
    var month = Number(birthday.substr(2, 2)) - 1;
    var day = Number(birthday.substr(0, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (year > today.getFullYear || month > 12 || day > 31) {
      return NaN;
    }
    if (
      today.getMonth() < month ||
      (today.getMonth() == month && today.getDate() < day)
    ) {
      age--;
    }
  } catch (err) {
    alert(err);
    return NaN;
  }
  return age;
}

let age = _calculateAge(dob);
if (age > 0) {
    alert(`You are ${age} years old!`);
} else {
    alert(`You have entered an invalid date of birth`);
}
