import {useEffect, useState} from "react";
import {getCategoryById} from "./data/data";
import {CategorySection} from "./new";

export default function Category({id}){
    const [category, setCategory] = useState();

    useEffect(() => {
        getCategoryById({id: id}).then(setCategory);
    }, [])

    return (
        <section className="main-products-container">
            {category ? <CategorySection category={category}/> : 'page downloading...'}
        </section>
    )
}