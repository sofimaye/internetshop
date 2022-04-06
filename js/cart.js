import {
    getProductById, countCartItems,
    addProductToCart,
    deleteProductFromCart,
    decreaseProductQuantityInCart, getCart
} from "./data.js";

// по value із url знайти потрібні поля продукта
let cartSection = document.querySelector(".cart");

getCart().then((cartProd) => {
    Promise.all(
        cartProd.map(({productId, quantity}) =>
            getProductById({id: productId})
                .then((product) => ({product: product, quantity: quantity}))
        )
    ).then((productsWithQuantity) => {
        //access to all products
        let totalPrice = 0;

        for (let {product, quantity} of productsWithQuantity) {
            showProduct({product: product, quantity: quantity});
            // виконується 1 раз
            // для того щоб виконувати кілька разів потрубно додати в eventListener
            totalPrice += product.actualPrice*quantity;
        }


        const total = document.createElement("div");
        total.className = "total-price-of-all-products";



        const buyBtn = document.createElement("button");
        buyBtn.className = "buy";
        buyBtn.innerHTML = "buy";

        const priceOfAllProducts = document.createElement("p");
        priceOfAllProducts.className = "price-of-all";
        priceOfAllProducts.innerHTML = "Total price $" + totalPrice.toString();


        total.appendChild(buyBtn);
        total.appendChild(priceOfAllProducts);
        cartSection.appendChild(total);

    })
})

const showProduct = ({product, quantity}) => {
    let prodWrapper = document.createElement("div");
    prodWrapper.className = "item";

    let buttonsDeleteAndLike = document.createElement('div');
    buttonsDeleteAndLike.className = "buttons";
    prodWrapper.appendChild(buttonsDeleteAndLike);

    let deleteButton = document.createElement("span");
    deleteButton.className = "delete-btn";

    buttonsDeleteAndLike.appendChild(deleteButton);

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
    let productSize = document.createElement("span");
    productSize.innerHTML = `${product.sizes}`;


    //adding to the div
    descriptionOfCartProduct.appendChild(prodName);
    descriptionOfCartProduct.appendChild(prodDescription);
    descriptionOfCartProduct.appendChild(productSize)
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


    //total price of one product cart
    let allPricesOfItems = product.actualPrice * quantity;
    // console.log(allPricesOfItems);

    priceOfCartProd.innerHTML = "$" + allPricesOfItems.toString();

    prodWrapper.appendChild(priceOfCartProd);
    cartSection.appendChild(prodWrapper);


    plusBtn.addEventListener("click", () => {
        addProductToCart({id: product.id}).then(({newQuantity}) => {

            inputCartItem.value = newQuantity.toString();
            let costsPlus = product.actualPrice * newQuantity;

            priceOfCartProd.innerHTML = "$" + costsPlus.toString();

            countCartItems().then((number) => {
                let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                quantityOfCardInTheNavbar.innerHTML = `${number}`;
            })
        })
    })

    minusBtn.addEventListener("click", () => {
        decreaseProductQuantityInCart({id: product.id}).then(({removed, newQuantity}) => {
            if (removed) {
                prodWrapper.remove();
            }

            inputCartItem.value = newQuantity.toString();
            let costsMinus = product.actualPrice * newQuantity;

            priceOfCartProd.innerHTML = "$" + costsMinus.toString()

            countCartItems().then((number) => {
                let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                quantityOfCardInTheNavbar.innerHTML = `${number}`;
            })
        })
    });

    deleteButton.addEventListener("click", () => {
        deleteProductFromCart({id: product.id}).then(() => {
            prodWrapper.remove();
            countCartItems().then((number) => {
                let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                quantityOfCardInTheNavbar.innerHTML = `${number}`;
            })
        })
    })

}
