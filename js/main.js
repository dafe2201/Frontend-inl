"use strict";
import { getProducts } from "./api.js";

const data = await getProducts(10);

console.log(data);

const renderCards = (prodList) => {
  let html = "";

  prodList.forEach((element) => {
    // TODO ÄNDRA MALL
    let htmlSegment = `
    <div class="col-lg-4 col-md-6">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Product name here</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
          0<small class="text-muted fw-light"> SEK</small>
        </h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button
          type="button"
          class="w-100 btn btn-lg btn-outline-primary"
        >
          Sign up for free
        </button>
      </div>
    </div>
  </div>`

    html += htmlSegment;
  });

  const productSection = document.querySelector(".generated-products");
  console.log(productSection)
  productSection.innerHTML = html;
};

renderCards(data);
