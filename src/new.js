import {getProductsByCategory, getAllCategories, addProductToWishlist} from "./data/data.js";
import {useState, useEffect} from "react";

export function Product({product}) {
    const showImage = () => {
        window.open(`/products/${product.id}`, '_self');
    }
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.images[0].url} onClick={showImage} className="product-thumb" alt="image"/>
                <button className="wish-btn" onClick={() => addProductToWishlist({id: product.id})}>add to the wishlist</button>
                {product.discount && <span className="discount-tag">{product.discount}</span>}
            </div>
            <div className="product-info">
                <h2 className="product-brand">{product.brand}</h2>
                <p className="product-short-description">{product.shortDescription}</p>
                <span className="price">{"$" + product.actualPrice}</span>
                <span className="previous-price">{product.previousPrice && "$" + product.previousPrice}</span>
            </div>
        </div>
    )
}

export function CategorySection({category}) {
    const [products, setProducts] = useState();

    useEffect(() => {
        getProductsByCategory({categoryId: category.id}).then(setProducts);
    }, [category]);


    if (!products) return <div>Loading products....</div>;

    return (
        <section className="one-category-products">
            <h2 className="product-category">{category.name}</h2>
            <div className="main-products-container" id={category.id}>
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

    if (!categories) return <img src="/images/Iphone-spinner-2.gif"/>;

    return (
        <section className="main-container-for-all-products-categories">
            {categories.map((category) => <CategorySection key={category.id} category={category}/>)}
        </section>
    )
}
