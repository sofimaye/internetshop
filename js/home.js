import {createCategorySection} from "./ui/products.js";
import {getCategoryById, getProductsWithDiscount} from "./data.js"


// подумати як зробити sale єдиним
getProductsWithDiscount().then((productsWithSales) => {
    const categoryIds = [...new Set(productsWithSales.map((p) => p.categoryId))]
    Promise.all(categoryIds.map(id => getCategoryById({id: id}))).then(categories => {
        for (let category of categories){
            let newProducts = productsWithSales.filter(p => p.categoryId === category.id);
            createCategorySection(category.name, newProducts);
        }
    })
})
