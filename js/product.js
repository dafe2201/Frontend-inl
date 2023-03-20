"use strict";
import { getProductById } from "./api.js";

const productID = JSON.parse(localStorage.getItem("ID"));

const data = await getProductById(productID);

/*
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
*/
const renderSpecificProduct = (data) => {
  // Ändra InnerHTML efter products värden
  const specificProductDiv = document.querySelector(".specific-product");

  let htmlContent = `<p>${data.id}</p>`;
  specificProductDiv.innerHTML = htmlContent;
};

renderSpecificProduct(data);
