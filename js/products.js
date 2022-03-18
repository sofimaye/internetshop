import {getAllCategories, getProductsByCategory, searchCategoriesByName} from "./data.js"
import {createCategorySection} from "./ui/products.js";

// getAllCategories()
//     .then((categories) => {
//         for (let category of categories) {
//             getProductsByCategory({categoryId: category.id})
//                 .then((products) => createCategorySection(category.name, products))
//         }
//     });


let buttonSearch = document.querySelector('.search-btn');
buttonSearch.addEventListener("click", () => {
    let input = document.querySelector(".search-box");
    let filter = input.value.toUpperCase();

    // let allProducts = document.querySelectorAll(".product-container");
    searchCategoriesByName({name: filter}).then(categories => {
        //повертаються всі категорії які відповідають пошуку
        for (let category of categories) {
            getProductsByCategory({categoryId: category.id})
                .then((products) => createCategorySection(category.name, products))
        }
    })

    //очистить результаты поиска
    input.value = "";

    //при повторном поиске стирать предыдущие данные поиска со страницы


})

