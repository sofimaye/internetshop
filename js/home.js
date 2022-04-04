import {createCategorySection} from "./ui/products.js";
import {getProductsWithDiscount} from "./data.js"


getProductsWithDiscount().then((productsWithSales) => {
    createCategorySection("Sale", productsWithSales);

})
