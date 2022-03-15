import {getAllCategories, getProductsByCategory} from "./data.js"
import {createCategorySection} from "./ui/products.js";

getAllCategories()
    .then((categories) => {
        for (let category of categories) {
            getProductsByCategory({categoryId: category.id})
                .then((products) => createCategorySection(category.name, products))
        }
    });
