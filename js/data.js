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
    image: "images/guccimarmount.jpg",
    brand: "gucci",
    shortDescription: "saffiano marmount leather bag",
    actualPrice: "$1000",
    previousPrice: "$2000"
}, {
    id: 2,
    categoryId: 1,
    discount: '-50%',
    image: "images/dressfaithfull.jpg",
    brand: "faithfull",
    shortDescription: "short black linen dress",
    actualPrice: "$500",
    previousPrice: "$250"
}, {
    id: 3,
    categoryId: 1,
    discount: '-50%',
    image: "images/guccihorsebit1955.jpg",
    brand: "gucci",
    shortDescription: "leather bag",
    actualPrice: "$1000",
    previousPrice: "$2000"
}, {
    id: 4,
    categoryId: 1,
    discount: '-50%',
    image: "images/dressselfportrait.jpg",
    brand: "selfportrait",
    shortDescription: "short dress",
    actualPrice: "$300",
    previousPrice: "$600"
}, {
    id: 5,
    categoryId: 1,
    discount: '-50%',
    image: "images/dressparosh.jpg",
    brand: "parosh",
    shortDescription: "short dress",
    actualPrice: "$300",
    previousPrice: "$600"
}, {
    id: 6,
    categoryId: 1,
    discount: '-50%',
    image: "images/dressdavidkoma.jpg",
    brand: "david koma",
    shortDescription: "short dress",
    actualPrice: "$400",
    previousPrice: "$800"
}, {
    id: 7,
    categoryId: 2,
    image: "images/burberry.jpg",
    brand: "burberry",
    shortDescription: "brown leather shoes",
    actualPrice: "$500"
}, {
    id: 8,
    categoryId: 2,
    image: "images/guccishoes.jpg",
    brand: "gucci",
    shortDescription: "gucci black leather shoes",
    actualPrice: "$700"
}, {
    id: 9,
    categoryId: 2,
    image: "images/louboutin.jpg",
    brand: "louboutin",
    shortDescription: "louboutin black shoes",
    actualPrice: "$1000"
}, {
    id: 10,
    categoryId: 2,
    image: "images/burberry2.jpg",
    brand: "burberry",
    shortDescription: "lether shoes",
    actualPrice: "$1000"
}, {
    id: 11,
    categoryId: 2,
    image: "images/guccishoes2.jpg",
    brand: "gucci",
    shortDescription: "saffiano marmount leather bag",
    actualPrice: "$1000"
}, {
    id: 12,
    categoryId: 3,
    image: "images/bakhirkajacket.jpg",
    brand: "bakhirka",
    shortDescription: "jacket",
    actualPrice: "$500"
}, {
    id: 13,
    categoryId: 3,
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}, {
    id: 14,
    categoryId: 3,
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}, {
    id: 15,
    categoryId: 3,
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}, {
    id: 16,
    categoryId: 3,
    image: "images/basemntjacket.jpg",
    brand: "basemnt",
    shortDescription: "jacket",
    actualPrice: "$800"
}]

const getProductsByCategory = ({categoryId}) => {
    return new Promise((resolve) => {
        resolve(products.filter(p => p.categoryId === categoryId))
    })
}

const getAllCategories = () => {
    return Promise.resolve(categories)
}

export {getProductsByCategory, getAllCategories}