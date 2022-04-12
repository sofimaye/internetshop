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
            <a href="wishlist.html"><img src="./images/heart-90.png" alt="wishlist"></a>
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


const createMobileNav = () => {
    // контейнер який заповнюється посиланнями на сторінки
    let navForMob = document.querySelector(".navbarForMobiles");
    navForMob.innerHTML = `
        <button class="hamNavButton">
            <img src="./images/hamburger-menu.svg" alt="">
        </button>`;

    const hamNavBut = document.querySelector(".hamNavButton");

    hamNavBut.addEventListener("click", () => {
        let pageItems = document.querySelectorAll(".hero-section,.main-products-container,.collection-container,footer");
        pageItems.forEach(page => page.style.display = "none");
        hamNavBut.style.display = "none";
        navForMob.style.height = "100vh";
        navForMob.style.width = "100vw";
        navForMob.style.alignItems = "center";


        const closeNav = document.createElement("div");
        closeNav.className = "closeNav";

        closeNav.innerHTML = `<button class="close"><img src="./images/close.svg" alt=""></button>`
        navForMob.appendChild(closeNav);

        const navMobileSearchBar = document.createElement("div");
        navMobileSearchBar.className = "navMobileSearchBar";

        navMobileSearchBar.innerHTML = `
                <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
                </div>
           `
        navForMob.appendChild(navMobileSearchBar);

        const linksContainer = document.createElement("ul");
        const arrayOfPages = ["./home.html","./new.html","./bags.html", "./shoes.html", "./dresses.html", "./sale.html"];
        const arrayOfCategories = ["home", "new", "bags", "shoes", "dresses", "sale"];
        let listItem;
        let link;
        for(let i=0; i < arrayOfPages.length && i < arrayOfCategories.length; i++){
            listItem = document.createElement("li");
            listItem.className = "link-mobile-item";
            link = document.createElement("a");
            link.className = "link";
            link.href = arrayOfPages[i];
            link.innerHTML= arrayOfCategories[i];
            listItem.appendChild(link)
            linksContainer.appendChild(listItem)
        }
        navForMob.appendChild(linksContainer);


        const navItems = document.createElement("div");
        navItems.className = "login-wishlist-cart";

        navItems.innerHTML = ` 
            <a href="#"><img src="./images/user-90.png" alt="user"></a>
            <a href="wishlist.html"><img src="./images/heart-90.png" alt="wishlist"></a>
            <a href="cart.html"><img src="./images/shopping-cart-64%20(1).png" alt="cart"><span class="cart-number"></span></a>`;

        navForMob.appendChild(navItems);


        document.querySelector(".close").addEventListener("click", () => {
            window.location.href = "home.html";
        })
    })

}

createMobileNav()