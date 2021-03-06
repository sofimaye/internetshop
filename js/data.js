const categories = [
    {
        id: 2,
        name: "Shoes",
        sizes: [36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41]
    },
    {
        id: 3,
        name: "Jackets",
        sizes: ["xs", "s", "m", "l", "xl"]
    },
    {
        id: 4,
        name: "Bags",
        sizes: ["small", "medium", "large"]
    },
    {
        id: 5,
        name: "Dresses",
        sizes: ["xs", "s", "m", "l", "xl"]
    }
]

const products = [{
    id: 1,
    categoryId: 4,
    discount: '-50%',
    images: [
        {
            url: "images/guccimarmount.jpg"
        },
        {
            url: "images/guccimarmount2.jpg"
        },
        {
            url: "images/guccimarmount3.jpg"
        },
    ],
    brand: "gucci",
    shortDescription: "saffiano marmount light-pink leather bag",
    actualPrice: 1000,
    previousPrice: 2000,
    sizes: ["small", "medium"],
}, {
    id: 2,
    categoryId: 5,
    discount: '-50%',
    images: [
        {
            url: "images/dressfaithfull.jpg"
        },
        {
            url: "images/dressfaithful2.jpg"
        },
    ],
    brand: "faithfull",
    shortDescription: "short black linen dress",
    actualPrice: 500,
    previousPrice: 1000,
    sizes: ["xs", "s", "m", "l", "xl"],
}, {
    id: 3,
    categoryId: 4,
    discount: '-50%',
    images: [
        {
            url: "images/guccihorsebit1955.jpg"
        },
        {
            url: "images/guccihorsebit1955(2).jpg"
        },
        {
            url: "images/guccihorsebit1955(3).jpg"
        },
    ],
    brand: "gucci",
    shortDescription: "brown gucci leather bag",
    actualPrice: 1000,
    previousPrice: 2000,
    sizes: ["large"],
}, {
    id: 4,
    categoryId: 5,
    discount: '-50%',
    images: [
        {
            url: "images/dressselfportrait.jpg"
        },

        {
            url: "images/dressselfportrait2.jpg"
        },
    ],
    brand: "selfportrait",
    shortDescription: "short dress",
    actualPrice: 300,
    previousPrice: 600,
    sizes: ["xs", "s", "m"],
}, {
    id: 5,
    categoryId: 5,
    discount: '-50%',
    images: [
        {
            url: "images/dressparosh.jpg"
        },
        {
            url: "images/dressparosh2.jpg"
        },
    ],
    brand: "parosh",
    shortDescription: "short dress",
    actualPrice: 300,
    previousPrice: 600,
    sizes: ["xs", "s"],
}, {
    id: 6,
    categoryId: 5,
    discount: '-50%',
    images: [
        {
            url: "images/dressdavidkoma.jpg"
        },
        {
            url: "images/dressdavidkoma2.jpg"
        },
    ],
    brand: "david koma",
    shortDescription: "short dress",
    actualPrice: 400,
    previousPrice: 800,
    sizes: ["xs", "s", "m", "l", "xl"],
}, {
    id: 7,
    categoryId: 4,
    images: [
        {
            url: "images/guccibrownleatherbag.jpg"
        },
        {
            url: "images/guccibrownleatherbag2.jpg"
        },
        {
            url: "images/guccibrownleatherbag3.jpg"
        },
        {
            url: "images/guccibrownleatherbag4.jpg"
        },
        {
            url: "images/guccibrownleatherbag5.jpg"
        },

    ],
    brand: "gucci",
    shortDescription: "gucci diana brown leather bag",
    actualPrice: 3000,
    sizes: ["medium", "large"],
}, {
    id: 8,
    categoryId: 2,
    images: [
        {
            url: "images/guccibeigeshoes.jpg"
        },

        {
            url: "images/guccibeigeshoes2.jpg"
        },

        {
            url: "images/guccibeigeshoes3.jpg"
        },

        {
            url: "images/guccibeigeshoes4.jpg"
        },
    ],
    brand: "gucci",
    shortDescription: "gucci beige leather shoes",
    actualPrice: 700,
    sizes: [38, 39],
}, {
    id: 9,
    categoryId: 2,
    images: [
        {
            url: "images/louboutin.jpg"
        },

        {
            url: "images/louboutin2.jpg"
        },

        {
            url: "images/louboutin3.jpg"
        },

        {
            url: "images/louboutin4.jpg"
        },

        {
            url: "images/louboutin5.jpg"
        }

    ],
    brand: "christian louboutin",
    shortDescription: "christian louboutin black shoes",
    actualPrice: 1000,
    sizes: [36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41],
}, {
    id: 10,
    categoryId: 2,

    images: [
        {
            url: "images/burberry.jpg"
        },

        {
            url: "images/burberry2.jpg"
        },

    ],
    brand: "burberry",
    shortDescription: "leather shoes",
    actualPrice: 1000,
    sizes: [37,37.5,38,38.5],
}, {
    id: 11,
    categoryId: 2,
    images: [
        {
            url: "images/guccishoes2.jpg"
        }
    ],
    brand: "gucci",
    shortDescription: "saffiano leather light-pink shoes",
    actualPrice: 1000,
    sizes: [36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41],
}, {
    id: 12,
    categoryId: 3,
    images: [
        {
            url: "images/bakhirkajacket.jpg",
        }
    ],
    brand: "bakhirka",
    shortDescription: "jacket",
    actualPrice: 500,
    sizes: ["xs", "s"],
}, {
    id: 13,
    categoryId: 3,
    images: [
        {
            url: "images/basemntjacket.jpg",
        }
    ],
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: 800,
    sizes: ["xs", "s", "m"],
}, {
    id: 14,
    categoryId: 4,
    images: [
        {
            url: "images/guccihorsebitblue.jpg",
        },

        {
            url: "images/guccihorsebitblue(2).jpg",
        },
        {
            url: "images/guccihorsebitblue(3).jpg",
        },

    ],
    brand: "gucci",
    shortDescription: "gucci blue leather bag",
    actualPrice: 1500,
    sizes: ["small", "medium"],
}, {
    id: 15,
    categoryId: 3,
    images: [
        {
            url: "images/basemntjacket.jpg",
        }
    ],
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: 800,
    sizes: ["xs", "s", "m"],
}, {
    id: 16,
    categoryId: 2,
    images: [
        {
            url: "images/christian_louboutin1.jpg",
        },
        {
            url: "images/christian_louboutin2.jpg",
        },

    ],
    brand: "gucci",
    shortDescription: "beige shoes",
    actualPrice: 800,
    sizes: [36, 36.5, 37, 38, 39, 39.5],
}]

const getProductsByCategory = ({categoryId}) => {
    return new Promise((resolve) => {
        resolve(products.filter(p => p.categoryId === categoryId))
    })
}

const getProductById = ({id}) => {
    return new Promise((resolve) => {
        resolve(products.find(p => p.id === id));
    })
}

const getAllCategories = () => {
    return Promise.resolve(categories)
}

const getCategoryById = ({id}) => {
    return new Promise((resolve) => {
        resolve(categories.find(c => c.id === id))
    })
}

const getProductsWithDiscount = () => {
    return new Promise((resolve) => {
        resolve(products.filter(p => p.discount))
    })
}

const searchCategoriesByName = ({name}) => {
    return new Promise((resolve) => {
        resolve(categories.filter(c => c.name.toUpperCase().includes(name.toUpperCase())))
    })
}

const getCart = () => {
    return new Promise((resolve) => {
        resolve(JSON.parse(localStorage.getItem("cart") || "[]"));
    });
}

const getWishlist = () => {
    return new Promise((resolve) => {
        resolve(JSON.parse(localStorage.getItem("wishlist") || "[]"))
    })
}

const countCartItems = () => {
    return new Promise((resolve) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        let number = 0;
        for (let elem of cart) {
            number += elem.quantity;
        }
        resolve(number)
    });
}

//???????? ?????????????????????????????? setItem, ?????? ?????????????????????? ??????????????, ???????? ?????? ???? ??????????.
// ???????????????? ?????????????????????????????? getItem, ?????? ???????????????? ???????????? ????????????, ???????????? ???? ??????????,
// ?? ?????????? ???????????????? ???????? ?????????? ?? localStorage

const addProductToCart = ({id, size}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart") || "[]");
        let cartItem = cartBusket.find(prod => prod.productId === id && prod.size === size);

        // ?????????? ?????????????????? ???????? ?? ???? ???????? ?????????? ??????????, ?????? ???????????? ?????????? ???? ?????????????? ?? localstorage, ???????? ????
        if (!cartItem) {
            cartItem = {productId: id, quantity: 1, size: size};
            cartBusket.push(cartItem)
        } else {
            cartItem.quantity++
        }

        localStorage.setItem("cart", JSON.stringify(cartBusket));
        resolve({newQuantity: cartItem.quantity})
    });
}

const addProductToWishlist = ({id}) => new Promise((resolve) => {

    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    let wishItem = wishlist.find(prod => prod.productId === id);

    if (!wishItem) {
        wishItem = {productId: id};
        wishlist.push(wishItem)
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    resolve()
})

const decreaseProductQuantityInCart = ({id, size}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart"));
        let cartItem = cartBusket.find(prod => prod.productId === id && prod.size === size);
        --cartItem.quantity;
        let removed = false
        if (cartItem.quantity <= 0) {
            let index = cartBusket.indexOf(cartItem);
            cartBusket.splice(index, 1);
            removed = true
        }
        localStorage.setItem("cart", JSON.stringify(cartBusket));
        resolve({removed: removed, newQuantity: cartItem.quantity})
    })
}


const deleteProductFromCart = ({id, size}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart"));
        let index = cartBusket.findIndex(prod => prod.productId === id && prod.size === size);
        cartBusket.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cartBusket));
        resolve()
    })
}

const deleteProductFromWishList = ({id}) => {
    return new Promise((resolve) => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist"));
        let index = wishlist.findIndex(prod => prod.productId === id);
        wishlist.splice(index, 1);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        resolve()
    })
}

export {
    getProductsByCategory,
    getAllCategories,
    getCategoryById,
    searchCategoriesByName,
    getProductById,
    countCartItems,
    addProductToCart,
    deleteProductFromCart,
    decreaseProductQuantityInCart,
    getCart,
    getProductsWithDiscount,
    addProductToWishlist,
    getWishlist,
    deleteProductFromWishList
}