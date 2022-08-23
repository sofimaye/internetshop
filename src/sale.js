import {useEffect, useMemo, useState} from "react";
import {getProductsWithDiscount} from "./data/data";
import {Product} from "./new";
import Sorting from "./sort";

export default function SalePage() {
    const [productsWithSales, setProductsWithSales] = useState();

    useEffect(() => {
        getProductsWithDiscount().then(setProductsWithSales)
    }, [])

    return (
        <>
            <Sorting sort={(sorting) => setProductsWithSales([...(productsWithSales || [])].sort(sorting))}/>
            <section className="main-products-container">
                {productsWithSales ? productsWithSales.map((product) => <Product key={product.id}
                                                                                 product={product}/>) : "products downloading"}
            </section>
        </>
    )
}