//navbar
import {countCartItems} from "./data.js";

const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
        <img src="../images/logo.png" class="brand-logo" alt="logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="../images/user-90.png" alt="user"></a>
            <a href="wishlist.html"><img src="../images/heart-90.png" alt="wishlist"></a>
            <a href="cart.html"><img src="../images/shopping-cart-64%20(1).png" alt="cart"><span class="cart-number"></span></a>
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

const searchPage = document.querySelector(".search-btn");
searchPage.addEventListener('click', () => {
    let searchInput = document.querySelector('.search-box');
    let input = searchInput.value;
    window.location.href = `search.html?search=${input}`;
})



const createMobileNav = () => {
    // контейнер який заповнюється посиланнями на сторінки
    let navForMob = document.querySelector(".navbarForMobiles");
    navForMob.innerHTML =`
        <button class="hamNavButton">
            <img src="../images/hamburger-menu.svg" alt="">
        </button>
        <div class="closeNav">
        <button class="close">
        <img src="../images/close.svg" alt="">
        </button>
        </div>`;

    const closeBtn = document.querySelector(".close");
    closeBtn.style.display = "none";
    const closeNav = document.querySelector(".closeNav");
    closeNav.style.display = "none";

    const hamNavBut = document.querySelector(".hamNavButton");

    hamNavBut.addEventListener("click", () => {
        let navBarContainerForHiddenItems = document.createElement("div");
        navBarContainerForHiddenItems.className = "navBarContainerForHiddenItems";
        navForMob.appendChild(navBarContainerForHiddenItems);

        let pageItems = document.querySelectorAll(".hero-section,.main-products-container,.collection-container,footer");
        pageItems.className = "pageItems";
        pageItems.forEach(page => page.style.display = "none");
        hamNavBut.style.display = "none";
        navForMob.style.height = "100vh";
        navForMob.style.width = "100vw";
        navForMob.style.alignItems = "center";
        //кнопка щоб закрити
        closeNav.style.display = "block";
        closeBtn.style.display = "flex";

        const navMobileSearchBar = document.createElement("div");
        navMobileSearchBar.className = "navMobileSearchBar";

        navMobileSearchBar.innerHTML = `
                <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
                </div>
           `

        const search = navMobileSearchBar.querySelector(".search-btn");
        search.addEventListener('click', () => {
            let searchInput = navMobileSearchBar.querySelector('.search-box');
            let input = searchInput.value;
            window.location.href = `search.html?search=${input}`;
        })

        navBarContainerForHiddenItems.appendChild(navMobileSearchBar);

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
        navBarContainerForHiddenItems.appendChild(linksContainer);


        const navItems = document.createElement("div");
        navItems.className = "login-wishlist-cart";

        navItems.innerHTML = ` 
            <a href="#"><img src="../images/user-90.png" alt="user"></a>
            <a href="wishlist.html"><img src="../images/heart-90.png" alt="wishlist"></a>
            <a href="cart.html"><img src="../images/shopping-cart-64%20(1).png" alt="cart"><span class="cart-number"></span></a>`;

        navBarContainerForHiddenItems.appendChild(navItems);

        closeBtn.addEventListener("click", () => {
            closeBtn.style.display = "none";
            closeNav.style.display = "none";
            document.querySelector(".hamNavButton").style.display = "flex";
            pageItems.forEach(page => page.style.display = "flex");
            const collectionContainer =  document.querySelector(".collection-container");
            if(collectionContainer){
            collectionContainer.style.display = "grid";
            }
            document.querySelector("footer").style.display = "block";
            document.querySelector(".navbarForMobiles").style.height = "50px";
            document.querySelector(".navbarForMobiles").style.width = "100vw";
            navBarContainerForHiddenItems.style.display = "none";
        });

        countCartItems().then((number) => {
            let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
            quantityOfCardInTheNavbar.innerHTML = `${number}`;
        })
    })
}
createMobileNav();





