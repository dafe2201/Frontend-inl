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
    <h6 class="my-0">${data.title}</h6>
  </div>
    <span class="text-muted">${data.price}</span>
    </li>
    `;

  content.innerHTML = htmlContent;
};

renderPage(data);
