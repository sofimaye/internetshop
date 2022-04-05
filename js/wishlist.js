import {
    getProductById, getWishlist, deleteProductFromWishList
} from "./data.js";


const wishlistSection = document.querySelector(".wishlist");

//[{}, {}, {}]
getWishlist().then((wishlist) => {
        for (const {productId} of wishlist) {
            getProductById({id: productId}).then((product) => {

                const prodWrapper = document.createElement("div");
                prodWrapper.className = "item";

                const buttonsDeleteAndLike = document.createElement('div');
                buttonsDeleteAndLike.className = "buttons";
                prodWrapper.appendChild(buttonsDeleteAndLike);

                const deleteButton = document.createElement("span");
                deleteButton.className = "delete-btn";

                buttonsDeleteAndLike.appendChild(deleteButton);

                const prodCartImageWrapper = document.createElement("div");
                prodCartImageWrapper.className = "image-for-prod-at-cart";

                const prodCartImage = document.createElement("img");
                prodCartImage.src = product.images[0].url;
                prodCartImage.alt = "";

                prodCartImageWrapper.appendChild(prodCartImage);
                prodWrapper.appendChild(prodCartImageWrapper);

                const descriptionOfCartProduct = document.createElement("div");
                descriptionOfCartProduct.className = "short-description";
                const prodName = document.createElement("span");
                prodName.innerHTML = `${product.brand}`;
                const prodDescription = document.createElement("span");
                prodDescription.innerHTML = `${product.shortDescription}`;

                descriptionOfCartProduct.appendChild(prodName);
                descriptionOfCartProduct.appendChild(prodDescription);
                prodWrapper.appendChild(descriptionOfCartProduct);

                const priceOfCartProd = document.createElement("div");
                priceOfCartProd.className = "total-price";
                priceOfCartProd.innerHTML = `$${product.actualPrice}`;
                
                const chooseTheOptionsButton = document.createElement("button");
                chooseTheOptionsButton.className = "options";
                chooseTheOptionsButton.innerHTML = "choose the options";

                chooseTheOptionsButton.addEventListener("click", () => {
                    window.location.href = `product.html?productId=${product.id}`;
                })

                let buttonOptionsWrapper = document.createElement("div");
                buttonOptionsWrapper.className = "button-options-wrapper";

                buttonOptionsWrapper.appendChild(chooseTheOptionsButton)
                prodWrapper.appendChild(priceOfCartProd);
                prodWrapper.appendChild(buttonOptionsWrapper);
                wishlistSection.appendChild(prodWrapper);

                deleteButton.addEventListener("click", () => {
                    deleteProductFromWishList({id: product.id}).then(() => {
                        prodWrapper.remove()
                    })
                })

            })
        }
    }
)