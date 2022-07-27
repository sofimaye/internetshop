import {getProductById} from "./data/data";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Sizes() {
    const addCheckClassToButton = () => {
        const button = document.querySelector('.size-radio-btn');
        button.className = "size-radio-btn check";
    }
    return (
        <button className="size-radio-btn" onClick={addCheckClassToButton}></button>
    )
}

export default function ProductPage() {
    const [product, setProduct] = useState();
    const {id} = useParams();

    console.log("Product id:", id)

    useEffect(() => {
        getProductById({id: parseInt(id)}).then(setProduct)
    }, []);

    if (!product) return <div>Loading products....</div>;

    console.log("Product:", product)
    return (
        <>
            <section className="product-details">
                <div className="image-slider">
                    <div className="product-images">
                    </div>
                </div>
                <div className="details">
                    <h2 className="product-brand">{product.brand}</h2>
                    <p className="product-short-description">{product.shortDescription}</p>
                    <span className="product-actual-price"></span>
                    <span className="product-previous-price"></span>
                    <span className="product-discount"></span>
                    <p className="product-sub-heading">select size</p>
                    <div className="sizes-container">
                        <Sizes/>
                    </div>
                    <button className="btn card-add-btn">add to cart</button>
                    <button className="btn wishlist-btn">add to wishlist</button>
                </div>
            </section>

            <section className="detail-des">
                <h2 className="heading">description</h2>
                <p className="des">{product.shortDescription}</p>
            </section>
        </>
    )
}