const createCard = function ({discount, image, brand, shortDescription, actualPrice, previousPrice}) {
    let prodContainer = document.querySelector('.product-container');

    let prodCard = document.createElement('div')
    prodCard.className = "product-card";
    prodCard.innerHTML = `
        <div class="product-image">
            <span class="discount-tag">${discount}</span>
            <img src=${image} class="product-thumb" alt="">
                <button class="card-btn">add to wishlist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${brand}</h2>
            <p class="product-short-description">${shortDescription}</p>
            <span class="price">${actualPrice}</span><span class="actual-price">${previousPrice}</span>
        </div>`

    prodContainer.appendChild(prodCard)

}
createCard({
    discount: '-50%',
    image: "images/guccimarmount.jpg",
    brand: "gucci",
    shortDescription: "saffiano marmount leather bag",
    actualPrice: "$1000",
    previousPrice: "$2000"
})
createCard({
    discount: '-50%',
    image: "images/dressfaithfull.jpg",
    brand: "faithfull",
    shortDescription: "short black linen dress",
    actualPrice: "$500",
    previousPrice: "$250"
})
createCard({
    discount: '-50%',
    image: "images/guccihorsebit1955.jpg",
    brand: "gucci",
    shortDescription: "leather bag",
    actualPrice: "$1000",
    previousPrice: "$2000"
})
createCard({
    discount: '-50%',
    image: "images/dressselfportrait.jpg",
    brand: "selfportrait",
    shortDescription: "short dress",
    actualPrice: "$300",
    previousPrice: "$600"
})

createCard({
    discount: '-50%',
    image: "images/dressparosh.jpg",
    brand: "parosh",
    shortDescription: "short dress",
    actualPrice: "$300",
    previousPrice: "$600"
})

createCard({
    discount: '-50%',
    image: "images/dressdavidkoma.jpg",
    brand: "david koma",
    shortDescription: "short dress",
    actualPrice: "$400",
    previousPrice: "$800"
})


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


//creating collections
const createCollection = function ({image, category}) {
    let collectionCont = document.querySelector('.collection-container');

    let collectionCard = document.createElement('a');
    collectionCard.className = 'collection';
    collectionCard.href = "#";
    collectionCard.innerHTML = `<img src=${image} alt="new collection">
            <p class="collection-title">${category}<br>apparels</p> `

    collectionCont.appendChild(collectionCard)
}

createCollection({
    image: 'images/dressandflowers.jpg',
    category: 'women'
})

createCollection({
    image: 'images/menstyle.jpg',
    category: 'men'
})

createCollection({
    image: 'images/bagscollection.jpg',
    category: 'bags'
})

