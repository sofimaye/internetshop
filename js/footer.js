//creating footer's list of categories
// const createListOfCategories = function ({title, clothing1, clothing2, clothing3, clothing4, clothing5}) {
//     let itemsContainer = document.querySelector('.footer-ul-container');
//     let itemsList = document.createElement('ul');
//     itemsList.className = "category";
//     itemsList.innerHTML = `
//         <li class="category-title">${title}</li>
//         <li><a href="#" class="footer-link">${clothing1}</a></li>
//         <li><a href="#" class="footer-link">${clothing2}</a></li>
//         <li><a href="#" class="footer-link">${clothing3}</a></li>
//         <li><a href="#" class="footer-link">${clothing4}</a></li>
//         <li><a href="#" class="footer-link">${clothing5}</a></li>`
//
//     itemsContainer.appendChild(itemsList)
// }
//
// createListOfCategories({
//     title: "women",
//     clothing1: "t-shirts",
//     clothing2: "trousers",
//     clothing3: "dresses",
//     clothing4: "shoes",
//     clothing5: "bags"
// })
//
// createListOfCategories({
//     title: "men",
//     clothing1: "t-shirts",
//     clothing2: "trousers",
//     clothing3: "suits",
//     clothing4: "shoes",
//     clothing5: "bags"
// })

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
    <img src="../images/logo2.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">dresses</a></li>
                <li><a href="#" class="footer-link">bags</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
            </ul>

            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">suits</a></li>
                <li><a href="#" class="footer-link">bags</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
            </ul>
        </div>
</div>

<p class="footer-title">about company</p>
<p class="info">Our philosophy is to combine affordable with luxury.We provide the opportunity
    to purchase the desired luxury items at a reasonable price. </p>

<p class="info">support emails - sofi.mann99@gmail.com, customersupport@gmail.com</p>
<p class="info">telephone - 555 777 5559</p>

<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms&services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>

    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
    </div>
</div>
<p class="footer-credit">Brands resale store</p>`

}

createFooter()



