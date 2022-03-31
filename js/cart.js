import {
    getProductById, countCartItems,
    addProductToCart,
    deleteProductFromCart,
    decreaseProductQuantityInCart, getCart
} from "./data.js";

// по value із url знайти потрібні поля продукта
let cartSection = document.querySelector(".cart");

//дістали із локального сховища value of key (у форматі string) та
// перетворили в обєкт з ключами та значеннями
// {productId: 1, quantity: 4}


getCart().then((cartProd) => {
    for (let {productId, quantity} of cartProd) {
        getProductById({id: productId}).then((product) => {
            let prodWrapper = document.createElement("div");
            prodWrapper.className = "item";

            let buttonsDeleteAndLike = document.createElement('div');
            buttonsDeleteAndLike.className = "buttons";
            prodWrapper.appendChild(buttonsDeleteAndLike);

            let deleteButton = document.createElement("span");
            deleteButton.className = "delete-btn";

            // let likeButton = document.createElement("span");
            // likeButton.className = "like-btn";

            buttonsDeleteAndLike.appendChild(deleteButton);
            // buttonsDeleteAndLike.appendChild(likeButton);

            let prodCartImageWrapper = document.createElement("div");
            prodCartImageWrapper.className = "image-for-prod-at-cart";

            let prodCartImage = document.createElement("img");
            prodCartImage.src = product.images[0].url;
            prodCartImage.alt = "";

            //adding to the div
            prodCartImageWrapper.appendChild(prodCartImage);
            prodWrapper.appendChild(prodCartImageWrapper);

            let descriptionOfCartProduct = document.createElement("div");
            descriptionOfCartProduct.className = "short-description";
            let prodName = document.createElement("span");
            prodName.innerHTML = `${product.brand}`;
            let prodDescription = document.createElement("span");
            prodDescription.innerHTML = `${product.shortDescription}`;

            //adding to the div
            descriptionOfCartProduct.appendChild(prodName);
            descriptionOfCartProduct.appendChild(prodDescription);
            prodWrapper.appendChild(descriptionOfCartProduct);


            let quantityOfProd = document.createElement("div");
            quantityOfProd.className = "quantity";

            let plusBtn = document.createElement("button");
            plusBtn.className = "plus-btn";
            plusBtn.type = "button";
            plusBtn.name = "button";


            let plusBtnImage = document.createElement("img");
            plusBtnImage.src = "images/plus.svg";
            plusBtnImage.alt = "";


            plusBtn.appendChild(plusBtnImage);

            let inputCartItem = document.createElement("input");
            inputCartItem.className = "input-text";
            inputCartItem.type = "text";
            inputCartItem.name = "name";
            inputCartItem.value = quantity;

            let minusBtn = document.createElement("button");
            minusBtn.className = "minus-btn";
            minusBtn.type = "button";
            minusBtn.name = "button";

            let minusBtnImage = document.createElement("img");
            minusBtnImage.src = "images/minus.svg";
            minusBtnImage.alt = "";


            minusBtn.appendChild(minusBtnImage);

            // adding to the div
            quantityOfProd.appendChild(plusBtn);
            quantityOfProd.appendChild(inputCartItem);
            quantityOfProd.appendChild(minusBtn);
            prodWrapper.appendChild(quantityOfProd);

            let priceOfCartProd = document.createElement("div");
            priceOfCartProd.className = "total-price";
            if (`${product.previousPrice}`) {
                priceOfCartProd.innerHTML = `${product.previousPrice}`
            } else {
                priceOfCartProd.innerHTML = `${product.actualPrice}`
            }
            prodWrapper.appendChild(priceOfCartProd);
            cartSection.appendChild(prodWrapper);


            plusBtn.addEventListener("click", () => {
                addProductToCart({id: productId}).then(({newQuantity}) => {
                    inputCartItem.value = newQuantity.toString();
                    countCartItems().then((number) => {
                        let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                        quantityOfCardInTheNavbar.innerHTML = `${number}`;
                    })
                })
            })


            minusBtn.addEventListener("click", () => {
                decreaseProductQuantityInCart({id: productId}).then(({removed, newQuantity}) => {
                    if (removed) {
                        prodWrapper.remove();
                    }
                    inputCartItem.value = newQuantity.toString();
                    countCartItems().then((number) => {
                        let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                        quantityOfCardInTheNavbar.innerHTML = `${number}`;
                    })
                })
            });

            deleteButton.addEventListener("click", () => {
                deleteProductFromCart({id: productId}).then(() => {
                    prodWrapper.remove();
                    countCartItems().then((number) => {
                        let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                        quantityOfCardInTheNavbar.innerHTML = `${number}`;
                    })
                })
            })
        });
    }
})
