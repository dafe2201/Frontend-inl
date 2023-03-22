"use strict";
import { getProductById } from "./api.js";

const renderSucessMessage = async () => {
  // Fetch Item From LocalStorage
  const productID = JSON.parse(localStorage.getItem("ID"));

  const confirmationDiv = document.querySelector(".confirmation");
  if (productID == null) {
    confirmationDiv.innerText = "Nothing to see here";
  } else {
    const data = await getProductById(productID);

    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add("lead");
    const textNode = document.createTextNode(
      `Thanks for ordering ${data.title} ${data.price} $. If you ordered before noon we will ship your item the same day`
    );
    paragraphElement.appendChild(textNode);

    confirmationDiv.appendChild(paragraphElement);

    // Reset localStorage
    localStorage.clear();
  }
};

await renderSucessMessage();
