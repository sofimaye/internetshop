import {getProductById, getWishlist, deleteProductFromWishList} from './data/data';
import {useEffect, useState} from "react";

function WishlistProduct({product, toDelete}) {
    return (
        <>
            <div className="item">
                <div className="buttons">
                        <div className="delete-btn" onClick={() => deleteProductFromWishList({id: product.id}).then(() => toDelete(product.id))}></div>
                </div>
                <div className="image-for-prod-at-cart">
                    <img src={product.images[0].url} alt="product image"/>
                </div>
                <div className="short-description">
                    <span>{product.brand}</span>
                    <span>{product.shortDescription}</span>
                </div>
                <div className="total-price">${product.actualPrice}</div>
                <div className="button-options-wrapper">
                    <button className="options" onClick={() => {
                        window.location.href = `/products/${product.id}`
                    }}>"choose the options"</button>
                </div>
            </div>

        </>
    )
}

export default function WishList() {
    const [products, setProducts] = useState();

    useEffect(() => {
        console.log("Loading wishlist")
        getWishlist().then((wishlist) => {
            Promise.all(wishlist.map(({productId}) => getProductById({id: productId}))).then(setProducts)
        })
    }, []);

    function removeFromWishlist(productId) {
        setProducts(products.filter(p => p.id !== productId))
    }

    return (
        <section className="wishlist">
            {products ? products.map((prod) => <WishlistProduct key={prod.id} product={prod} toDelete={removeFromWishlist}/>) : "product is loading"}
        </section>
    )
}