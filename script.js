"use strict";
const displayResult = document.querySelector(".display");
const displayComment = document.querySelector(".comment");

const checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", function () {
  const myName = document.querySelector(".input-myname").value;
  const partnerName = document.querySelector(".input-pname").value;

  const randomNumber = Math.trunc(Math.random() * 99 + 1);
  displayResult.textContent = `${partnerName} has ${randomNumber}% love for you ${myName}`;
  if (randomNumber < 30) {
    displayComment.textContent = `${partnerName} just dey whine you ${myName}`;
  }
  if (randomNumber < 30) {
    displayComment.textContent = `${partnerName} just dey whine you ${myName}`;
  }
  if (randomNumber > 30 && randomNumber <= 50) {
    displayComment.textContent = `${partnerName} is not in love with you ${myName}`;
  }
  if (randomNumber > 50 && randomNumber <= 75) {
    displayComment.textContent = `${partnerName} loves you but needs more commitment from you ${myName}💗`;
  }
  if (randomNumber > 75) {
    displayComment.textContent = `${partnerName} has an undiluted love for you ${myName} ➡♥♥♥💑`;
  }
  myName = "";
  partnerName = "";
});
