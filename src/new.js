// page for all products
import {getProductsByCategory, getAllCategories} from "./data/data.js";
import {useState, useEffect} from "react";

export function Product({product}) {
    const showImage = () => {
        window.open(`/products/${product.id}`);
    }
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.images[0].url} onClick={showImage} className="product-thumb" alt="image"/>
                <button className="card-btn">add to the wishlist</button>
                {product.discount ? <span className="discount-tag">{product.discount}</span> : ""}
            </div>
            <div className="product-info">
                <h2 className="product-brand">{product.brand}</h2>
                <p className="product-short-description">{product.shortDescription}</p>
                <span className="price">{"$" + product.actualPrice}</span>
                <span className="previous-price">{(product.previousPrice) ? "$" + product.previousPrice : ""}</span>
            </div>
        </div>
    )
}

export function CategorySection({category}) {
    const [products, setProducts] = useState();
    console.log("products is", products)

    useEffect(() => {
        getProductsByCategory({categoryId: category.id}).then(setProducts);
    }, [category]);

    const scroll = ({direction}) => {
        const containers = document.querySelectorAll(".product-container");
        for (let container of containers) {
            if (container.id === category.id.toString()) {
                if (direction === "left") {
                    container.scrollLeft -= container.getBoundingClientRect().width;
                } else if (direction === "right") {
                    container.scrollLeft += container.getBoundingClientRect().width;
                }
            }
        }
    }

    if (!products) return <div>Loading products....</div>;

    return (
        <section className="product">
            <h2 className="product-category">{category.name}</h2>

            <button className="pre-btn" onClick={() => scroll({direction: "left"})}>
                <img src="/images/left%20arrow.png" alt="left arrow"/>
            </button>

            <button className="nxt-btn" onClick={() => scroll({direction: "right"})}>
                <img src="/images/right%20arrow.png" alt="right arrow"/>
            </button>

            <div className="product-container" id={category.id}>
                {products.map((product) => <Product key={product.id} product={product}/>)}
            </div>
        </section>
    )

}

export function NewPage() {
    const [categories, setCategories] = useState();
    useEffect(() => {
        getAllCategories().then(setCategories);
    }, []);

    if (!categories) return <div>Loading categories...</div>;

    return (
        <section className="main-products-container">
            {categories.map((category) => <CategorySection key={category.id} category={category}/>)}
        </section>
    )
}
