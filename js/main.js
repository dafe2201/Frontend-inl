"use strict";
import { getProducts } from "./api.js";

const data = await getProducts(10);

console.log(data);

const renderCards = (prodList) => {
  let html = "";

  prodList.forEach((element) => {
    let htmlSegment = `
    <div class="col-lg-4 col-md-6">
    <div class="card mb-4 rounded-3 shadow-sm border-black">
      <div
        class="card-header py-3 text-black border-black"
      >
      <img class="card-img-top" src="https://picsum.photos/200/200?random=1" alt="Card image cap">
        <h4 class="my-1 fw-normal">${element.category}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
          ${element.price}<small class="text-muted fw-light"> $</small>
        </h1>
        <p>Artikel ${element.id}</p>
        <p>${element.title}</p>
        <a href="/product.html" id="${element.id}" class="w-100 btn btn-lg btn-dark save-id">
          Show more
        </a>
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

// Listener for save-id a bt
const showMoreBtn = document.querySelectorAll(".save-id");
//console.log(showMoreBtn);

showMoreBtn.forEach((element) => {
  const itemId = element.id;
  console.log(itemId);

  element.addEventListener("click", () => {
    localStorage.setItem("ID", JSON.stringify(itemId));
  });
});
