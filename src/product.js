import {getProductById} from "./data/data";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductPage() {
    const [product, setProduct] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const {id} = useParams();

    console.log("Product id:", id)

    useEffect(() => {
        getProductById({id: parseInt(id)}).then(setProduct)
    }, [product]);

    if (!product) return <div>Loading products....</div>;
    console.log("Product:", product)
    return (
        <>
            <section className="product-details">
                <div className="image-slider">
                    <Gallery>
                        {product.images ? product.images.map((image, index) => (
                            <Item width="724" height="1024" original={image.url} thumbSelector={image.url} key={index}>
                                {({ref, open}) => (
                                    <img alt="image" ref={ref} onClick={open} src={image.url}/>
                                )}
                            </Item>
                        )) : ""}
                    </Gallery>
                </div>
                <div className="details">
                    <h2 className="product-brand">{product.brand}</h2>
                    <p className="product-short-description">{product.shortDescription}</p>
                    <span className="product-actual-price">${product.actualPrice}</span>
                    <span className="product-previous-price">{product.previousPrice}</span>
                    <span className="product-discount">{product.discount}</span>
                    <p className="product-sub-heading">select size</p>
                    <div className="sizes-container">
                        {product.sizes.map(size => <button key={size}
                                                           className={selectedSize === size ? "size-radio-btn check" : "size-radio-btn"}
                                                           onClick={() => setSelectedSize(size)}>{size}</button>)}
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