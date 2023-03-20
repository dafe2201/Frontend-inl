"use strict";
import { getProducts } from "./api.js";

const data = await getProducts(10);

console.log(data);

const renderCards = (prodList) => {
  let html = "";

  prodList.forEach((element) => {
    let htmlSegment = `
    <div class="col-lg-4 col-md-6">
    <div class="card mb-4 rounded-3 shadow-sm border-primary">
      <div
        class="card-header py-3 text-white bg-primary border-primary"
      >
        <h4 class="my-0 fw-normal">${element.category}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
          ${element.price}<small class="text-muted fw-light"> $</small>
        </h1>
        <p>${element.title}</p>
        <button type="button" class="w-100 btn btn-lg btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  </div>
    `;

    html += htmlSegment;
  });

  const productsDiv = document.querySelector(".products");
  console.log(productsDiv);
  productsDiv.innerHTML = html;
};

renderCards(data);
