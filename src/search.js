import {searchProductsByItsDescription} from "./data/data";
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import {Product} from "./new";

export default function Search(){
    const [searchParams] = useSearchParams();
    const filter = searchParams.get("search");
    const [products, setProducts] = useState();

    useEffect(() => {
        searchProductsByItsDescription({shortDescription: filter}).then(setProducts)
    }, [filter])

    return(
        <>
            <section className="search-results">
                <h2 className="heading">Matches for {filter}</h2>
                <section className="main-sale-container">
                    {products ? products.map((product) => <Product key={product.id} product={product}/>): `There are no matches for ${filter}`}
                </section>
            </section>
        </>
    )
}