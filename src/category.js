import {useEffect, useState} from "react";
import {Product} from "./new";
import {getProductsByCategory} from "./data/data";

export default function Category({id}){
    const [products, setProducts] = useState();

    useEffect(() => {
        getProductsByCategory({categoryId: id}).then(setProducts);
    }, [])

    return (
        <section className="main-products-container">
            {products ? products.map((product) => <Product key={product.id} product={product}/>) : 'page loading...'}
        </section>
    )
}