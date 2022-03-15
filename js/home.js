// implementation for the sale collection

import {createCard} from "./products.js";
import {getAllCategories, getProductsByCategory} from "./data.js"


getAllCategories()
    .then((categories) => {
        for (let category of categories) {
            if (category.categoryId === 1) {
                getProductsByCategory({categoryId: category.id})
                    .then((products) => {
                        for (let product of products) {
                            createCard(product.name, product)
                        }
                    })
            }

        }
    })