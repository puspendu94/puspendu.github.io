"use strict";
/*
Important Conversions to string, to number, and to boolean
*/

function validationChecking(dob_object) {
  var today = new Date();
  if (dob_object.year > today.getFullYear || dob_object.month > 12 || dob_object.day > 31) {
    return NaN;
  }

}

function currentTime() {
  return alert(new Date().toLocaleString());
}

var showCurrentTime = function () {
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= 12) {
    meridian = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

setInterval(showCurrentTime, 0);

function add_item() {
  // Getting box and ul by selecting id;
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  if (item.value != "") {
    // Creating element and adding value to it
    let make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value));

    // Adding li to ul
    list_item.appendChild(make_li);

    // Reset the value of box
    item.value = "";

    // Delete a li item on click
    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    // Alert msg when value of box is "" empty.
    alert("plz add a value to item");
  }
}

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};
