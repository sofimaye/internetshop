import {updateQuantity, getProductById} from "./data/data";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import 'photoswipe/dist/photoswipe.css';
import {Gallery, Item} from 'react-photoswipe-gallery';
import ErrorHandler from "./errorhandler";
import {addProductToWishlist} from "./data/data";
import {useNavbarNum} from "./navnumber";

export default function ProductPage() {
    const quantityOfCartNumber = useNavbarNum();
    const [product, setProduct] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const {id} = useParams();

    useEffect(() => {
        getProductById({id: parseInt(id)}).then(setProduct)
    }, [product]);

    if (!product) return <ErrorHandler/>;

    return (
        <>
            <section className="product-details">
                <div className="image-slider">
                    <Gallery>
                        {product.images && product.images.map((image, index) => (
                            <Item width="724" height="1024" original={image.url} thumbSelector={image.url} key={index}>
                                {({ref, open}) => (
                                    <img alt="image" ref={ref} onClick={open} src={image.url}/>
                                )}
                            </Item>
                        ))}
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
                    <section className="detail-des">
                        <h2 className="heading">description</h2>
                        <p className="des">{product.shortDescription}</p>
                    </section>
                    <div className="product-buttons-container">
                    <button className="btn card-add-btn" onClick={() => {
                        !selectedSize ? alert('choose size!'):
                            updateQuantity({id: product.id, size: selectedSize, newQuantity: 1})
                            && quantityOfCartNumber.updated()
                    }}>
                        add to cart
                    </button>
                    <button className="btn wishlist-btn" onClick={() => addProductToWishlist({id: product.id})}>add to wishlist</button>
                    </div>
                </div>
            </section>
        </>
    )
}