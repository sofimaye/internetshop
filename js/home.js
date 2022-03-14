function createCategorySection(categoryName, products) {
    // add new section
    // for each product in products add to newly created section
    let mainSectionContainer = document.querySelector(".main-products-container");

    let newSection = document.createElement("section");
    newSection.className = "product";

    mainSectionContainer.appendChild(newSection);

    let prodCategory = document.createElement('h2');
    prodCategory.className = "product-category";
    prodCategory.innerHTML = `${categoryName}`;

    newSection.appendChild(prodCategory);

    let prevBtn = document.createElement("button");
    prevBtn.className = "pre-btn";

    let buttonPrevImg = document.createElement("img");
    buttonPrevImg.src = "images/left%20arrow.png";
    buttonPrevImg.alt = "";

    prevBtn.appendChild(buttonPrevImg);
    newSection.appendChild(prevBtn);

    let nextBtn = document.createElement("button");
    nextBtn.className = "nxt-btn";

    let buttonNextImg = document.createElement("button");
    buttonNextImg.src = "images/right%20arrow.png";
    buttonNextImg.alt = "";

    nextBtn.appendChild(buttonNextImg);
    newSection.appendChild(nextBtn);

    let newProdCard = document.createElement("div");
    newProdCard.className = "product-container";
    newProdCard.id = `${categoryName}`;

    newSection.appendChild(newProdCard);


    for (let prod of products) {
        createCard(categoryName, prod)
    }
}


const createCard = function (containerId, {
    discount, image, brand, shortDescription, actualPrice,
    previousPrice = "the same price"
}) {
    let prodContainer = document.querySelector(`#${containerId}.product-container`);

    let prodCard = document.createElement('div');
    prodCard.className = "product-card";
    prodCard.innerHTML = `
        <div class="product-image">
            <img src=${image} class="product-thumb" alt="">
                <button class="card-btn">add to wishlist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${brand}</h2>
            <p class="product-short-description">${shortDescription}</p>
            <span class="price">${actualPrice}</span>
        </div>`

        if (`${discount}`) {
            let prodImgCont = document.querySelector(".product-image");
            let newSaleSpan = document.createElement('span');
            newSaleSpan.className = "discount-tag";
            newSaleSpan.innerHTML = `${discount}`;

            prodImgCont.appendChild(newSaleSpan)
        }

        if (`${previousPrice}`) {
            let prodInfo = document.querySelector(".product-info");
            let newInfoSpan = document.createElement('span');
            newInfoSpan.className = "actual-price";
            newInfoSpan.innerHTML = `${previousPrice}`;


            prodInfo.appendChild(newInfoSpan)
        }

    prodContainer.appendChild(prodCard);

}

// <span className="actual-price">${previousPrice}</span>
// <span className="discount-tag">${discount}</span>


createCategorySection("sale", [{
    discount: '-50%',
    image: "images/guccimarmount.jpg",
    brand: "gucci",
    shortDescription: "saffiano marmount leather bag",
    actualPrice: "$1000",
    previousPrice: "$2000"
}, {
    discount: '-50%',
    image: "images/dressfaithfull.jpg",
    brand: "faithfull",
    shortDescription: "short black linen dress",
    actualPrice: "$500",
    previousPrice: "$250"
}, {
    discount: '-50%',
    image: "images/guccihorsebit1955.jpg",
    brand: "gucci",
    shortDescription: "leather bag",
    actualPrice: "$1000",
    previousPrice: "$2000"
}, {
    discount: '-50%',
    image: "images/dressselfportrait.jpg",
    brand: "selfportrait",
    shortDescription: "short dress",
    actualPrice: "$300",
    previousPrice: "$600"
}, {
    discount: '-50%',
    image: "images/dressparosh.jpg",
    brand: "parosh",
    shortDescription: "short dress",
    actualPrice: "$300",
    previousPrice: "$600"
}, {
    discount: '-50%',
    image: "images/dressdavidkoma.jpg",
    brand: "david koma",
    shortDescription: "short dress",
    actualPrice: "$400",
    previousPrice: "$800"
}]);


createCategorySection("shoes", [{
    image: "images/burberry.jpg",
    brand: "burberry",
    shortDescription: "brown leather shoes",
    actualPrice: "$500"
}, {
    image: "images/guccishoes.jpg",
    brand: "gucci",
    shortDescription: "gucci black leather shoes",
    actualPrice: "$700"
}, {
    image: "images/louboutin.jpg",
    brand: "louboutin",
    shortDescription: "louboutin black shoes",
    actualPrice: "$1000"
}, {
    image: "images/burberry2.jpg",
    brand: "burberry",
    shortDescription: "lether shoes",
    actualPrice: "$1000"
}, {
    image: "images/guccishoes2.jpg",
    brand: "gucci",
    shortDescription: "saffiano marmount leather bag",
    actualPrice: "$1000"
}]);

createCategorySection("jackets", [{
    image: "images/bakhirkajacket.jpg",
    brand: "bakhirka",
    shortDescription: "jacket",
    actualPrice: "$500"
}, {
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}, {
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}, {
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}, {
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}])


// to think about better implementation
// коли відступати нікуди як зі скролл лефт робити инфинит скроллинг
const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.nxt-btn')];
const prevBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
