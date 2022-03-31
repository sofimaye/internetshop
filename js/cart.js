import {getProductById} from "./data.js";

// по value із url знайти потрібні поля продукта
let cartSection = document.querySelector(".cart");

//дістали із локального сховища value of key (у форматі string) та
// перетворили в обєкт з ключами та значеннями
// {productId: 1, quantity: 4}


let cartProd = JSON.parse(localStorage.getItem("cart"));

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
            let cartBusket = JSON.parse(localStorage.getItem("cart"));  // [{}]
            // type of data [{productId: 1, quantity: 1}]
            //find якщо є то поміняти quantity, якщо немає то поміняти з quantity: 1

            let cartItem = cartBusket.find(prod => prod.productId === product.id);
            let newQuantity = ++cartItem.quantity;
            inputCartItem.value = newQuantity.toString();

            localStorage.setItem("cart", JSON.stringify(cartBusket));
            let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
            let number = 0;
            for(let elem of cartBusket){
                number += elem.quantity;
            }
            quantityOfCardInTheNavbar.innerHTML = `${number}`;
        })


        minusBtn.addEventListener("click", () => {
            //[{}, {}]
            let cartBusket = JSON.parse(localStorage.getItem("cart"));
            let cartItem = cartBusket.find(prod => prod.productId === product.id);

            let newQuantity = --cartItem.quantity;

            if (newQuantity > 0) {
                inputCartItem.value = newQuantity.toString();
            } else {
                inputCartItem.value = newQuantity.toString();
                let index = cartBusket.indexOf(cartItem);
                cartBusket.splice(index, 1);
                prodWrapper.remove();
            }
            localStorage.setItem("cart", JSON.stringify(cartBusket));

            let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
            let number = 0;
            for(let elem of cartBusket){
                number += elem.quantity;
            }
            quantityOfCardInTheNavbar.innerHTML = `${number}`;

        });

        //додати видалення за допомогою кнопки видалення товару
        deleteButton.addEventListener("click", () => {
            //[{}, {}]
            let cartBusket = JSON.parse(localStorage.getItem("cart"));
            let cartItem = cartBusket.find(prod => prod.productId === product.id);




            let index = cartBusket.indexOf(cartItem);
            cartBusket.splice(index, 1);
            prodWrapper.remove();

            localStorage.setItem("cart", JSON.stringify(cartBusket));

            //вся робота з localStorage повинна бути винесена в окрему функцію
            //треба провести рефакторинг коду щоб всі дані бралися з одного файлу
            //уникати повторювання коду;
            //не змішувати UI із localstorage

            let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
            let number = 0;
            for(let elem of cartBusket){
                number += elem.quantity;
            }
            quantityOfCardInTheNavbar.innerHTML = `${number}`;

        });
    });
}
