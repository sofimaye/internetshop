import {useEffect, useState} from "react";
import {getProductsWithDiscount} from "./data/data";
import {Product} from "./new";

export default function SalePage(){
    const [productsWithSales, setProductsWithSales] = useState();

    useEffect(() => {
        getProductsWithDiscount().then(setProductsWithSales)
    }, [])

    return(
        <section className="main-products-container">
            {productsWithSales ? productsWithSales.map((product) => <Product key={product.id} product={product}/>) : "products downloading"}
        </section>
    )
}