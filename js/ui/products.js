export function createCategorySection(categoryName, products) {
    // add new section
    // for each product in products add to newly created section
    let mainSectionContainer = document.querySelector(".main-products-container");

    let newSection = document.createElement("section");
    newSection.className = "product";

    let newProdCard = document.createElement("div");
    newProdCard.className = "product-container";
    newProdCard.id = `${categoryName}`;

    mainSectionContainer.appendChild(newSection);

    let prodCategory = document.createElement('h2');
    prodCategory.className = "product-category";
    prodCategory.innerHTML = `${categoryName}`;

    newSection.appendChild(prodCategory);

    let prevBtn = document.createElement("button");
    prevBtn.className = "pre-btn";
    prevBtn.addEventListener('click', () => {
        newProdCard.scrollLeft -= newProdCard.getBoundingClientRect().width;
    })


    let buttonPrevImg = document.createElement("img");
    buttonPrevImg.src = "images/left%20arrow.png";
    buttonPrevImg.alt = "";

    prevBtn.appendChild(buttonPrevImg);
    newSection.appendChild(prevBtn);

    let nextBtn = document.createElement("button");
    nextBtn.className = "nxt-btn";
    nextBtn.addEventListener('click', () => {
        newProdCard.scrollLeft += newProdCard.getBoundingClientRect().width;
    })

    let buttonNextImg = document.createElement("img");
    buttonNextImg.src = "images/right%20arrow.png";
    buttonNextImg.alt = "";

    nextBtn.appendChild(buttonNextImg);

    newSection.appendChild(nextBtn);
    newSection.appendChild(newProdCard);


    for (let prod of products) {
        createCard(categoryName, prod)
    }
}


export const createCard = function (containerId, {
    id,
    discount,
    image,
    brand,
    shortDescription,
    actualPrice,
    previousPrice
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

    if (discount) {
        let prodImgCont = prodCard.querySelector(".product-image");
        let newSaleSpan = document.createElement('span');
        newSaleSpan.className = "discount-tag";
        newSaleSpan.innerHTML = discount;

        prodImgCont.appendChild(newSaleSpan)
    }

    if (previousPrice) {
        let prodInfo = prodCard.querySelector(".product-info");
        let newInfoSpan = document.createElement('span');
        newInfoSpan.className = "actual-price";
        newInfoSpan.innerHTML = `${previousPrice}`;


        prodInfo.appendChild(newInfoSpan)
    }

    prodCard.addEventListener("click", () => {
        prodCard.id = id;
        window.location.href = `product.html?productId=${id}`;
    })
    prodContainer.appendChild(prodCard);
}
