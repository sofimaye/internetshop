import {searchProducts} from "./data/data";
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import {Product} from "./new";

export default function Search(){
    const [searchParams] = useSearchParams();
    const filter = searchParams.get("search");
    const [products, setProducts] = useState();

    useEffect(() => {
        searchProducts({searchItems: filter}).then(setProducts);
    }, [filter]);

    return(
        <>
            <section className="search-results">
                <h2 className="heading">{(products && products.length > 0) ? `Matches for ${filter}` : `No matches for ${filter}`}</h2>
                <section className="main-products-container">
                    {products?.map((product) => <Product key={product.id} product={product}/>)}
                </section>
            </section>
        </>
    )
}