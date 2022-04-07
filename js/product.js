import {
    addProductToCart,
    addProductToWishlist,
    countCartItems,
    getProductById,
    getAllCategories,
    getCategoryById
} from "./data.js";

let productId = parseInt(new URLSearchParams(window.location.search).get("productId"));
if (!productId) {
    window.location.href = "404.html";
}


getProductById({id: productId}).then((product) => {
    if (!product) {
        window.location.href = "404.html";
    }
    let selectedProductSize;

    let prodSection = document.querySelector(".product-details");
    let prodDescription = document.querySelector(".detail-des");

    prodSection.innerHTML = `<div class="image-slider">
        <div class="product-images">
        </div>
    </div>

    <div class="details">
        <h2 class="product-brand">${product.brand}</h2>
        <p class="product-short-description">${product.shortDescription}</p>
        <span class="product-actual-price"></span>
        <span class="product-previous-price"></span>
        <span class="product-discount"></span>

        <p class="product-sub-heading">select size</p>


<!--       <form action="cart.html" method="post" class="sizes-container">-->

<!--       </form>-->

        <div class="sizes-container">
        
        </div>
       
       <button class="btn card-add-btn">add to cart</button>
       <button class="btn wishlist-btn">add to wishlist</button>
       
       
    </div>`;

    let sizesContainer = document.querySelector(".sizes-container");


    getCategoryById({id: product.categoryId}).then((category) => {
        for (let size of category.sizes) {
            let sizeOfProduct = product.sizes.find(s => s === size);
            if (size === sizeOfProduct){

                let buttonSize = document.createElement("button");
                buttonSize.addEventListener("click", () => {
                    buttonSize.className = "size-radio-btn check";
                    selectedProductSize = size;
                })
                buttonSize.className = "size-radio-btn";
                buttonSize.innerHTML = `${size}`;

                sizesContainer.appendChild(buttonSize)
            }
        }
    })


    let imagesProdContainer = document.querySelector(".product-images");

    //array of objects
    for (let image of product.images) {
        let newImage = document.createElement('img');
        newImage.src = image.url;
        newImage.alt = "";
        imagesProdContainer.appendChild(newImage)
    }

    let price = document.querySelector(".product-actual-price");
    let discount = document.querySelector(".product-discount");
    let previous = document.querySelector(".product-previous-price");

    if (product.discount) {
        if (product.previousPrice) {
            price.innerHTML = `$${product.actualPrice}`
        } else {
            price.innerHTML = `$${product.previousPrice}`
        }
        discount.innerHTML = `${product.discount}`;
        previous.innerHTML = `${product.previousPrice}`;
    }else{
        price.innerHTML = `$${product.actualPrice}`
    }


    let prodBackgroundImage = document.querySelector(".image-slider");
    prodBackgroundImage.style.backgroundImage = `url('${product.images[0]?.url || 'images/000-404.png'}')`;

    prodDescription.innerHTML = `
    <h2 class="heading">description</h2>
    <p class="des">${product.shortDescription}</p>`;


    let gallery = document.querySelector(".image-slider img");

    gallery.addEventListener("click", () => {
        let pswpElement = document.querySelector('.pswp');

        let items = product.images.map((image) => ({src: image.url, w: 400, h: 600}));

        let options = {
            index: 0, // start at first slide
            allowPanToNext: true, loop: true, pinchToClose: true, closeOnScroll: true,
        };

        // Initializes and opens PhotoSwipe
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    })


    let addToCartButton = document.querySelector(".btn.card-add-btn");
    let addToWishlist = document.querySelector(".btn.wishlist-btn");


    addToWishlist.addEventListener("click", () => {
        addProductToWishlist({id: product.id}).then(() => {
            getProductById({id: product.id}).then((product) => {
                alert(`${product.brand} added to wishlist!`)
            })
        })
    })


    addToCartButton.addEventListener('click', () => {
        if (!selectedProductSize) {
            alert("Select size!")
        } else {
            addProductToCart({id: product.id, size: selectedProductSize}).then(() => {
                countCartItems().then((number) => {
                    let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                    quantityOfCardInTheNavbar.innerHTML = `${number}`;
                })
            })
        }
    })
})

