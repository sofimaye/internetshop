import {createCategorySection} from "./ui/products.js";
import {getProductsByCategory, getAllCategories} from "./data.js"

getAllCategories().then((categories) => {
    for(let category of categories){
        getProductsByCategory({categoryId: category.id}).then(
            ((products) => {createCategorySection(category.name, products)})
        )
    }
})