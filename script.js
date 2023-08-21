"use strict";
const displayResult = document.querySelector(".display");
const displayComment = document.querySelector(".comment");

const checkBtn = document.querySelector(".check");
const redoBtn = document.querySelector(".redo");

checkBtn.addEventListener("click", function () {
  const myName = document.querySelector(".input-myname").value;
  const partnerName = document.querySelector(".input-pname").value;
  checkBtn.style.backgroundColor = "white";
  setTimeout(function () {
    checkBtn.style.backgroundColor = "red";
  }, 1000);
  document.querySelector(".input-pname").value = " ";
  document.querySelector(".input-myname").value = " ";
  if (
    myName === "" ||
    (partnerName === "" && myName === "enter your name") ||
    partnerName === "enter partner's name"
  ) {
    displayResult.textContent = `Please enter your name and partner's name`;
    document.querySelector(".input-pname").value = "enter partner's name";
    document.querySelector(".input-myname").value = "enter your name";
  } else {
    const randomNumber = Math.trunc(Math.random() * 99 + 1);
    displayResult.textContent = `${partnerName} has ${randomNumber}% love for you ${myName}`;
    if (randomNumber < 30) {
      displayComment.textContent = `${partnerName} just dey whine you ${myName}`;
    } else if (randomNumber < 30) {
      displayComment.textContent = `${partnerName} just dey whine you ${myName}`;
    } else if (randomNumber > 30 && randomNumber <= 50) {
      displayComment.textContent = `${partnerName} is not in love with you ${myName}`;
    } else if (randomNumber > 50 && randomNumber <= 75) {
      displayComment.textContent = `${partnerName} loves you but needs more commitment from you ${myName}💗`;
    } else if (randomNumber > 75) {
      displayComment.textContent = `${partnerName} has an undiluted love for you ${myName} ➡♥♥♥💑`;
    }
  }
});
redoBtn.addEventListener("click", function () {
  redoBtn.style.backgroundColor = "black";
  setTimeout(() => {
    redoBtn.style.backgroundColor = "green";
  }, 1000);
  displayResult.textContent = "See Result Here";
  displayComment.textContent = "comment here";
  document.querySelector(".input-pname").value = "enter partner's name";
  document.querySelector(".input-myname").value = "enter your name";
});
