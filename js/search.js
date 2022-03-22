import {getProductsByCategory, searchCategoriesByName} from "./data.js"
import {createCategorySection} from "./ui/products.js";


let input = document.querySelector(".search-box");
// let filter = input.value;

// get value of the query parameter with search key
let filter = new URLSearchParams(window.location.search).get("search");
input.value = filter;


// let allProducts = document.querySelectorAll(".product-container");
searchCategoriesByName({name: filter}).then(categories => {
    //повертаються всі категорії які відповідають пошуку


    // clean up search results
    let searchCont = document.querySelector(".search-results");
    while (searchCont.firstChild) {
        searchCont.removeChild(searchCont.firstChild);
    }
    //якщо категорії немає у списку
    if (categories.length === 0) {
        let searchRes = document.createElement("h2")
        searchRes.className = "heading";

        searchCont.prepend(searchRes);

        searchRes.innerHTML = `no matches for ${filter}`;


    } else {
        let searchRes = document.createElement("h2")
        searchRes.className = "heading";

        searchCont.prepend(searchRes);

        searchRes.innerHTML = `Matches for ${filter}`;
        const productsContainer = document.createElement("section");
        productsContainer.className = "main-products-container";
        searchCont.appendChild(productsContainer)
    }

    for (let category of categories) {
        getProductsByCategory({categoryId: category.id})
            .then((products) => createCategorySection(category.name, products))
    }
})
