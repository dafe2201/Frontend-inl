"use strict";
import { getProductById } from "./api.js";

// Fetch Item From LocalStorage
const productID = JSON.parse(localStorage.getItem("ID"));
const data = await getProductById(productID);

const renderSucessMessage = (data) => {
  const confirmationDiv = document.querySelector(".confirmation");
  const paragraphElement = document.createElement("p");
  const textNode = document.createTextNode(
    `Thanks for ordering ${data.title} ${data.price}. If you ordered before noon we will ship your item the same day`
  );
  paragraphElement.appendChild(textNode);

  confirmationDiv.appendChild(paragraphElement);
};

renderSucessMessage(data);
