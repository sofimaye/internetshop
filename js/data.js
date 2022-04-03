const categories = [
    {
        id: 1,
        name: "Sale"
    },
    {
        id: 2,
        name: "Shoes"
    },
    {
        id: 3,
        name: "Jackets"
    }
]

const products = [{
    id: 1,
    categoryId: 1,
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
    previousPrice: 2000
}, {
    id: 2,
    categoryId: 1,
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
    previousPrice: 1000
}, {
    id: 3,
    categoryId: 1,
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
    previousPrice: 2000
}, {
    id: 4,
    categoryId: 1,
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
    previousPrice: 600
}, {
    id: 5,
    categoryId: 1,
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
    previousPrice: 600
}, {
    id: 6,
    categoryId: 1,
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
    previousPrice: 800
}, {
    id: 7,
    categoryId: 2,
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
    actualPrice: 3000
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
    actualPrice: 700
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
    actualPrice: 1000
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
    actualPrice: 1000
}, {
    id: 11,
    categoryId: 2,
    images: [
        {
            url: "images/guccishoes2.jpg"
        }
    ],
    brand: "gucci",
    shortDescription: "saffiano marmount leather bag",
    actualPrice: 1000
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
    actualPrice: 500
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
    actualPrice: 800
}, {
    id: 14,
    categoryId: 3,
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
    actualPrice: 1500
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
    actualPrice: 800
}, {
    id: 16,
    categoryId: 3,
    images: [
        {
            url: "images/guccishoes2.jpg",
        }
    ],
    brand: "gucci",
    shortDescription: "beige loafers",
    actualPrice: 800
}]

const getProductsByCategory = ({categoryId}) => {
    return new Promise((resolve) => {
        resolve(products.filter(p => p.categoryId === categoryId))
    })
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const getProductById = ({id}) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.find(p => p.id === id)), getRandomArbitrary(400, 1200))
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

//Коли використовувати setItem, він перезаписує елемент, який був до нього.
// потрібно використовувати getItem, щоб отримати старий список, додати до нього,
// а потім зберегти його назад у localStorage
const addProductToCart = ({id}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart") || "[]");
        let cartItem = cartBusket.find(prod => prod.productId === id);

        if (!cartItem) {
            cartItem = {productId: id, quantity: 1};
            cartBusket.push(cartItem)
        } else {
            cartItem.quantity++
        }
        localStorage.setItem("cart", JSON.stringify(cartBusket))
        resolve({newQuantity: cartItem.quantity})
    })
}
const decreaseProductQuantityInCart = ({id}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart"));
        let cartItem = cartBusket.find(prod => prod.productId === id);
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
const deleteProductFromCart = ({id}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart"));
        let index = cartBusket.findIndex(prod => prod.productId === id);
        cartBusket.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cartBusket));
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
    getCart
}