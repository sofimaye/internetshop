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
            url: "/images/guccimarmount.jpg"
        },
        {
            url: "/images/guccimarmount2.jpg"
        },
        {
            url: "/images/guccimarmount3.jpg"
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
            url: "/images/dressfaithfull.jpg"
        },
        {
            url: "/images/dressfaithful2.jpg"
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
            url: "/images/guccihorsebit1955.jpg"
        },
        {
            url: "/images/guccihorsebit1955(2).jpg"
        },
        {
            url: "/images/guccihorsebit1955(3).jpg"
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
            url: "/images/dressselfportrait.jpg"
        },

        {
            url: "/images/dressselfportrait2.jpg"
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
            url: "/images/dressparosh.jpg"
        },
        {
            url: "/images/dressparosh2.jpg"
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
            url: "/images/dressdavidkoma.jpg"
        },
        {
            url: "/images/dressdavidkoma2.jpg"
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
            url: "/images/guccibrownleatherbag.jpg"
        },
        {
            url: "/images/guccibrownleatherbag2.jpg"
        },
        {
            url: "/images/guccibrownleatherbag3.jpg"
        },
        {
            url: "/images/guccibrownleatherbag4.jpg"
        },
        {
            url: "/images/guccibrownleatherbag5.jpg"
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
            url: "/images/guccibeigeshoes.jpg"
        },

        {
            url: "/images/guccibeigeshoes2.jpg"
        },

        {
            url: "/images/guccibeigeshoes3.jpg"
        },

        {
            url: "/images/guccibeigeshoes4.jpg"
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
            url: "/images/louboutin.jpg"
        },

        {
            url: "/images/louboutin2.jpg"
        },

        {
            url: "/images/louboutin3.jpg"
        },

        {
            url: "/images/louboutin4.jpg"
        },

        {
            url: "/images/louboutin5.jpg"
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
            url: "/images/burberry.jpg"
        },

        {
            url: "/images/burberry2.jpg"
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
            url: "/images/guccishoes2.jpg"
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
            url: "/images/bakhirkajacket.jpg",
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
            url: "/images/basemntjacket.jpg",
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
            url: "/images/guccihorsebitblue.jpg",
        },

        {
            url: "/images/guccihorsebitblue(2).jpg",
        },
        {
            url: "/images/guccihorsebitblue(3).jpg",
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
            url: "/images/basemntjacket.jpg",
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
            url: "/images/christian_louboutin1.jpg",
        },
        {
            url: "/images/christian_louboutin2.jpg",
        },

    ],
    brand: "gucci",
    shortDescription: "beige shoes",
    actualPrice: 800,
    sizes: [36, 36.5, 37, 38, 39, 39.5]
},{
    id: 17,
    categoryId: 2,
    discount: '-30%',
    images: [
        {
            url: "/images/christian_louboutin1.jpg",
        },
        {
            url: "/images/christian_louboutin2.jpg",
        },

    ],
    brand: "gucci",
    shortDescription: "beige shoes",
    actualPrice: 800,
    previousPrice: 1200,
    sizes: [36, 36.5, 37, 38, 39, 39.5]
}, {
    id: 18,
    categoryId: 5,
    images: [
        {
            url: '/images/new dresses/BURBERRY.jpg'
        },
        {
            url: '/images/new dresses/BURBERRY2.jpg'
        }
    ],
    brand: 'burberry',
    shortDescription: "short dress",
    actualPrice: 500,
    sizes: ['xs', 's', 'm']
}, {
    id: 19,
    categoryId: 5,
    images: [
        {
            url: '/images/new dresses/CARAVANA dress1.jpg'
        },
        {
            url: '/images/new dresses/CARAVANA2.jpg'
        }
    ],
    brand: 'caravana',
    shortDescription: "short dress",
    actualPrice: 900,
    sizes: ['xs', 's', 'm']
},
    {
        id: 20,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/CARINE GILSON.jpg'
            },
            {
                url: '/images/new dresses/CARINE GILSON2.jpg'
            },
            {
                url: '/images/new dresses/CARINE GILSON3.jpg'
            }
        ],
        brand: 'carine gilson',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    },{
        id: 21,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/COSTARELLOS.jpg'
            },
            {
                url: '/images/new dresses/COSTARELLOS2.jpg'
            },
            {
                url: '/images/new dresses/COSTARELLOS3.jpg'
            }
        ],
        brand: 'costarellos',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 22,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/DAVID KOMA.jpg'
            },
            {
                url: '/images/new dresses/DAVID KOMA2.jpg'
            }
        ],
        brand: 'DAVID KOMA',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 23,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/david koma sparkling dress1.jpg'
            },
            {
                url: '/images/new dresses/david koma sparkling dress2.jpg'
            }
        ],
        brand: 'david koma',
        shortDescription: "sparkling dress",
        actualPrice: 1500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 24,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/dion lee dress.jpg'
            },
            {
                url: '/images/new dresses/dion lee dress2.jpg'
            },
            {
                url: '/images/new dresses/dion lee dress3.jpg'
            },
            {
                url: '/images/new dresses/dion lee dress4.jpg'
            }
        ],
        brand: 'dion lee',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 25,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/FLEUR DU MAL.jpg'
            },
            {
                url: '/images/new dresses/FLEUR DU MAL2.jpg'
            },
            {
                url: '/images/new dresses/FLEUR DU MAL3.jpg'
            }
        ],
        brand: 'fleur du mal',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 26,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/GALVAN LONDON.jpg'
            },
            {
                url: '/images/new dresses/GALVAN LONDON2.jpg'
            },
            {
                url: '/images/new dresses/GALVAN LONDON3.jpg'
            }
        ],
        brand: 'galvan london',
        shortDescription: "short dress",
        actualPrice: 700,
        sizes: ['xs', 's', 'm']
    }, {
        id: 27,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/gucci beige dress1.jpg'
            },
            {
                url: '/images/new dresses/gucci beige dress2.jpg'
            },
            {
                url: '/images/new dresses/gucci beige dress3.jpg'
            }
        ],
        brand: 'gucci',
        shortDescription: "short dress",
        actualPrice: 1000,
        sizes: ['xs', 's', 'm']
    }, {
        id: 28,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/gucci dress black1.jpg'
            },
            {
                url: '/images/new dresses/gucci dress black2.jpg'
            },
            {
                url: '/images/new dresses/gucci black dress3.jpg'
            }
        ],
        brand: 'gucci',
        shortDescription: "short dress",
        actualPrice: 1000,
        sizes: ['xs', 's', 'm']
    }, {
        id: 29,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/HELMUT LANG1.jpg'
            },
            {
                url: '/images/new dresses/HELMUT LANG2.jpg'
            }
        ],
        brand: 'helmut lang',
        shortDescription: "short dress",
        actualPrice: 800,
        sizes: ['xs', 's', 'm']
    }, {
        id: 30,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/I.D.SARRIERI1.jpg'
            },
            {
                url: '/images/new dresses/I.D.SARRIERI2.jpg'
            },
            {
                url: '/images/new dresses/I.D.SARRIERI3.jpg'
            }
        ],
        brand: 'I.D.SARRIERI',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 31,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/la perla dress.jpg'
            },
            {
                url: '/images/new dresses/la perla dress2.jpg'
            }
        ],
        brand: 'la perla',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 32,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/LORO PIANA1.jpg'
            },
            {
                url: '/images/new dresses/LORO PIANA2.jpg'
            }
        ],
        brand: 'loro piana',
        shortDescription: "long dress",
        actualPrice: 1500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 33,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/MARYSIA.jpg'
            },
            {
                url: '/images/new dresses/MARYSIA2.jpg'
            },
        ],
        brand: 'MARYSIA',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 34,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/MATTEAU.jpg'
            },
            {
                url: '/images/new dresses/MATTEAU2.jpg'
            }
        ],
        brand: 'MATTEAU',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 35,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/MATTEAU beige.jpg'
            },
            {
                url: '/images/new dresses/MATTEAU beige2.jpg'
            }
        ],
        brand: 'MATTEAU',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 36,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/MISBHV.jpg'
            },
            {
                url: '/images/new dresses/MISBHV2.jpg'
            }
        ],
        brand: 'MISBHV',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 37,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/OSCAR DE LA RENTA.jpg'
            },
            {
                url: '/images/new dresses/OSCAR DE LA RENTA2.jpg'
            }
        ],
        brand: 'oscar de la renta',
        shortDescription: "short dress",
        actualPrice: 2500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 38,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/OSCAR DE LA RENTA tweed1.jpg'
            },
            {
                url: '/images/new dresses/OSCAR DE LA RENTA tweed2.jpg'
            },
            {
                url: '/images/new dresses/OSCAR DE LA RENTA tweed3.jpg'
            }
        ],
        brand: 'oscar de la renta',
        shortDescription: "short dress",
        actualPrice: 3500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 39,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/parosh pink dress1.jpg'
            },
            {
                url: '/images/new dresses/parosh pink dress2.jpg'
            },
            {
                url: '/images/new dresses/parosh pink dress3.jpg'
            }
        ],
        brand: 'parosh',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 40,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/philip lim black dress1.jpg'
            },
            {
                url: '/images/new dresses/phillip lim black dress2.jpg'
            }
        ],
        brand: 'phillip lim',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 41,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/ROLAND MOURET.jpg'
            },
            {
                url: '/images/new dresses/ROLAND MOURET2.jpg'
            }
        ],
        brand: 'roland mouret',
        shortDescription: "short dress",
        actualPrice: 300,
        sizes: ['xs', 's', 'm']
    }, {
        id: 42,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/self portrait red dress1.jpg'
            },
            {
                url: '/images/new dresses/self portrait red dress2.jpg'
            }
        ],
        brand: 'selfportrait',
        shortDescription: "short dress",
        actualPrice: 500,
        sizes: ['xs', 's', 'm']
    }, {
        id: 43,
        categoryId: 5,
        images: [
            {
                url: '/images/new dresses/the mannei.jpg'
            },
            {
                url: '/images/new dresses/the mannei 2.jpg'
            },
            {
                url: '/images/new dresses/the mannei 3.jpg'
            }
        ],
        brand: 'mannei',
        shortDescription: "short black dress",
        actualPrice: 2000,
        sizes: ['xs', 's', 'm']
    }
]

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

const searchProducts = ({searchItems}) => {
    return new Promise((resolve) => {
        const filteredCategories = categories.filter(c => c.name.toUpperCase().includes(searchItems.toUpperCase()));
        const filteredProducts = (filteredCategories.length > 0)
            ? filteredCategories.flatMap((category) => products.filter(p => p.categoryId === category.id))
            : products.filter(p => p.shortDescription.toUpperCase().includes(searchItems.toUpperCase()));
        resolve(filteredProducts);
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

const updateQuantity = ({id, size, newQuantity}) => {
    return new Promise((resolve) => {
        let cartBusket = JSON.parse(localStorage.getItem("cart"));
        let cartItem = cartBusket.find(prod => prod.productId === id && prod.size === size);

        if (!cartItem) {
            cartItem = {productId: id, quantity: newQuantity, size: size};
            cartBusket.push(cartItem)
        }

        cartItem.quantity = newQuantity;
        let removed = false;

        if(cartItem.quantity <= 0 ){
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
    getProductById,
    countCartItems,
    updateQuantity,
    deleteProductFromCart,
    getCart,
    getProductsWithDiscount,
    addProductToWishlist,
    getWishlist,
    deleteProductFromWishList,
    searchProducts
}