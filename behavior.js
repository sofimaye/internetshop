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
            <a href="#"><img src="./images/heart-90.png" alt="wishlist"></a>
            <a href="#"><img src="./images/shopping-cart-64%20(1).png" alt="cart"></a>

        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">new</a></li>
        <li class="link-item"><a href="#" class="link">bags</a></li>
        <li class="link-item"><a href="#" class="link">shoes</a></li>
        <li class="link-item"><a href="#" class="link">clothes</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
    </ul>
    `;
}

createNav();