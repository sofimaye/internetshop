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
<!--             <img src="" alt="">-->
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

    let imagesProdContainer = document.querySelector(".product-images");

    //array of objects
    for(let image of product.images) {
        let newImage = document.createElement('img');
        newImage.src = image.url;
        newImage.alt = "";
        imagesProdContainer.appendChild(newImage)
    }


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
    prodBackgroundImage.style.backgroundImage = `url('${product.images[0]?.url || 'images/000-404.png'}')`;

    prodDescription.innerHTML = `
    <h2 class="heading">description</h2>
    <p class="des">${product.shortDescription}</p>`;


    let gallery = document.querySelector(".image-slider img");

    gallery.addEventListener("click", () => {
        let pswpElement = document.querySelector('.pswp');

        let items = product.images.map((image) => ({ src: image.url, w: 400, h:600}));

        let options = {
            index: 0, // start at first slide
            allowPanToNext: true,
            loop: true,
            pinchToClose: true,
            closeOnScroll: true,
        };

// Initializes and opens PhotoSwipe
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    })

})
