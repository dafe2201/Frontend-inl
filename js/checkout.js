"use strict";
import { getProductById } from "./api.js";

// Fetch Item From LocalStorage
const productID = JSON.parse(localStorage.getItem("ID"));

const data = await getProductById(productID);

const renderPage = (data) => {
  const content = document.querySelector(".cart-list");

  let htmlContent = `
  <li class="list-group-item d-flex justify-content-between lh-sm">
  <div>
    <h6 class="my-0 mx-3">${data.title}</h6>
  </div>
    <span class="text-muted">${data.price}</span>
    </li>
    `;

  content.innerHTML = htmlContent;
};

renderPage(data);

//Action listener
document.getElementById("checkout-button").addEventListener("click", validate);

function validate(e) {
  e.preventDefault(); // Gör så det inte postar formuläret (default)

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");

  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const country = document.getElementById("country");
  const state = document.getElementById("state");
  const zip = document.getElementById("zip");

  const card = document.getElementById("cc-number");
  const expiration = document.getElementById("cc-expiration");
  const cvv = document.getElementById("cc-cvv");

  const allElements = [];
  elementList.push(
    firstName,
    lastName,
    email,
    address,
    country,
    state,
    zip,
    card,
    expiration,
    cvv
  );

  const isNotEmpty = stringIsCorrectFormat(allElements);
  console.log(isNotEmpty);

  const firstNameCorrect = nameIsCorrectLength(firstName);
  console.log(firstNameCorrect);

  const lastNameCorrect = nameIsCorrectLength(lastName);
  console.log(lastNameCorrect);

  const emailCorrect = emailIsCorrect(email);
  console.log(emailCorrect);
}

function stringIsCorrectFormat(elementList) {
  elementList.forEach((element) => {
    if (element.value == null || element.value.length == 0) {
      element.classList.add("invalid");
      element.placeholder = "Cannot be empty";
      return false;
    } else {
      element.classList.remove("invalid");
    }
    return true;
  });
}

function nameIsCorrectLength(name) {
  if (name.value.length < 2 || name.value.length > 50) {
    name.classList.add("invalid");
    name.placeholder = "please enter a valied name";
    return false;
  } else {
    name.classList.remove("invalid");
  }
  return true;
}

function emailIsCorrect(email) {
  if (email.value.includes("@") || email.value.length > 50) {
    email.classList.add("invalid");
    email.placeholder = "Please enter a valid email";
    return false;
  } else {
    email.classList.remove("invalid");
  }
  return true;
}

function phoneNumberIsCorrect(phoneNumber) {
  // Får innehålla siffror, bindestreck och parenteser (lol varför), max 50 tecken.
  // Behöver nog regexa skiten.
}
