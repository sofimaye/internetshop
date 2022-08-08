import {
    getProductById,
    addProductToCart,
    deleteProductFromCart,
    decreaseProductQuantityInCart, getCart
} from './data/data';
import {useEffect, useState} from "react";

function CartProd({cartProduct, changeQuantity, toDelete}) {
    const [quantity, setQuantity] = useState(cartProduct.quantity);
    const price = cartProduct.product.actualPrice * quantity;

    return (
        <div className="item">
            <div className="buttons">
                <span className="delete-btn" onClick={() => {
                    deleteProductFromCart({id: cartProduct.product.id, size: cartProduct.size}).then(() => {
                        setQuantity(0)
                        toDelete(cartProduct.product.id, cartProduct.size)
                    })
                }}></span>
            </div>
            <div className="image-for-prod-at-cart">
                <img src={cartProduct.product.images[0].url} alt="cart image"/>
            </div>
            <div className="short-description">
                <span>{cartProduct.product.brand}</span>
                <span>{cartProduct.product.shortDescription}</span>
                <span>{cartProduct.size}</span>
            </div>
            <div className="quantity">
                <button className="plus-btn" type="button" name="button" onClick={() => {
                    addProductToCart({id: cartProduct.product.id, size: cartProduct.size}).then(({newQuantity}) => {
                        setQuantity(newQuantity);
                        changeQuantity(cartProduct.product.id, cartProduct.size, newQuantity)
                    })
                }}>
                    <img src="images/plus.svg" alt="plus button image"/>
                </button>
                <input className="input-text" type="text" name="name" value={quantity}/>
                <button className="minus-btn" type="button" name="button" onClick={() => {
                    decreaseProductQuantityInCart({id: cartProduct.product.id, size: cartProduct.size})
                        .then(({removed, newQuantity}) => {
                            if (removed) {
                                toDelete(cartProduct.product.id, cartProduct.size);
                            } else {
                                changeQuantity(cartProduct.product.id, cartProduct.size, newQuantity);
                            }
                            setQuantity(newQuantity)
                        })
                }}>
                    <img src="images/minus.svg" alt="minus button image"/>
                </button>
            </div>
            <div className="total-price">
                {"$" + price}
            </div>
        </div>
    )
}


export default function Cart() {
    const [cartProducts, setCartProducts] = useState();
    let totalPrice = cartProducts?.map(({product, quantity}) => product.actualPrice * quantity)
        ?.reduce((a, b) => a + b, 0) || 0;

    useEffect(() => {
        getCart().then(cart => {
            Promise.all(
                cart.map(({productId, quantity, size}) =>
                    getProductById({id: productId}).then(product => ({product, quantity, size}))
                )
            ).then(setCartProducts)
        })
    }, []);

    function removeFromCart(productId, productSize){
        setCartProducts(cartProducts.filter(p => !(p.product.id === productId && p.size === productSize)));
    }

    function changeQuantity(productId, productSize, newQuantity) {
        setCartProducts(prods => prods.map(item => {
            if (item.product.id === productId && item.size === productSize) {
                return {...item, quantity: newQuantity}
            }
            else return item
        }));
    }

    return (
        <section className="cart">
            <div className="total-price-of-all-products">
                <button className="buy">"buy"</button>
                <p className="price-of-all">{`Total price $${totalPrice}`}</p>
            </div>

            {cartProducts ? cartProducts.map((prod) => <CartProd key={prod.product.id.toString()+prod.size} cartProduct={prod} changeQuantity={changeQuantity}
                                                                 toDelete={removeFromCart}/>) : "Cart is empty"}
        </section>
    )
}
