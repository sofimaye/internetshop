import {getProductById} from "./data.js";


let productId = parseInt(new URLSearchParams(window.location.search).get("productId"));
if (!productId) {
    window.location.href = "404.html";
}


getProductById({id: productId}).then((product) => {
    if (!product) {
        window.location.href = "404.html";
    }

    let prodSection = document.querySelector(".product-details");
    let prodDescription = document.querySelector(".detail-des");


    prodSection.innerHTML = `<div class="image-slider">
        <div class="product-images">
            <img src="${product.image}" class="active" alt="">
            <img src="${product.image}" alt="">
<!--            <img src="images/dressdavidkoma2.jpg" alt="">-->
        </div>
    </div>

    <div class="details">
        <h2 class="product-brand">${product.brand}</h2>
        <p class="product-short-description">${product.shortDescription}</p>
        <span class="product-price"></span>
        <span class="product-actual-price"></span>
        <span class="product-discount"></span>

        <p class="product-sub-heading">select size</p>


        <input type="radio" name="size" value="xs" checked hidden id="xs-size">
        <label for="xs-size" class="size-radio-btn check">xs</label>

        <input type="radio" name="size" value="s" hidden id="s-size">
        <label for="s-size" class="size-radio-btn">s</label>

        <input type="radio" name="size" value="m" hidden id="m-size">
        <label for="m-size" class="size-radio-btn">m</label>

        <input type="radio" name="size" value="l" hidden id="l-size">
        <label for="l-size" class="size-radio-btn">l</label>

        <input type="radio" name="size" value="xl" hidden id="xl-size">
        <label for="xl-size" class="size-radio-btn">xl</label>

        <button class="btn card-add-btn">add to cart</button>
        <button class="btn">add to wishlist</button>

    </div>`;

    let price = document.querySelector(".product-price");
    if (product.previousPrice) {
        price.innerHTML = `${product.previousPrice}`
    } else {
        price.innerHTML = `${product.actualPrice}`
    }

    let discount = document.querySelector(".product-discount");
    let actualPrice = document.querySelector(".product-actual-price");
    if (product.discount) {
        discount.innerHTML = `${product.discount}`;
        actualPrice.innerHTML = `${product.actualPrice}`;
    }


    let prodBackgroundImage = document.querySelector(".image-slider");
    prodBackgroundImage.style.backgroundImage = `url('${product.image}')`;

    prodDescription.innerHTML = `
    <h2 class="heading">description</h2>
    <p class="des">${product.shortDescription}</p>`;


})
