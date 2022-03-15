import {createCategorySection} from "./ui/products.js";
import {getCategoryById, getProductsByCategory} from "./data.js"

getCategoryById({id: 1})
    .then((category) => {
        getProductsByCategory({categoryId: category.id})
            .then((products) => {
                createCategorySection(category.name, products)
            })
    })
