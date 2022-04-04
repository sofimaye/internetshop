//navbar
import {countCartItems} from "./data.js";

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
     <div class="nav">
        <img src="./images/logo.png" class="brand-logo" alt="logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="./images/user-90.png" alt="user"></a>
            <a href="wishlist.html"><img src="./images/heart-90.png" alt="wishlist"><span class="wishlist-number"></span></a>
            <a href="cart.html"><img src="./images/shopping-cart-64%20(1).png" alt="cart"><span class="cart-number"></span></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="./home.html" id="home-page" class="link">home</a></li>
        <li class="link-item"><a href="./new.html" id="new-page" class="link">new</a></li>
        <li class="link-item"><a href="./bags.html" class="link">bags</a></li>
        <li class="link-item"><a href="./shoes.html" class="link">shoes</a></li>
        <li class="link-item"><a href="./dresses.html" class="link">dresses</a></li>
        <li class="link-item"><a href="./sale.html" class="link">sale</a></li>
    </ul>
    `

    countCartItems().then((number) => {
        let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
        quantityOfCardInTheNavbar.innerHTML = `${number}`;
    })
}

createNav();


let searchPage = document.querySelector(".search-btn");


searchPage.addEventListener('click', () => {
    let searchInput = document.querySelector('.search-box');
    let input = searchInput.value;
    window.location.href = `search.html?search=${input}`;
})
