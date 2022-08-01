import {getCategoryById} from "./data/data";
import {CategorySection} from "./new";
import {useEffect, useState} from "react";

export function DressesPage() {
    const [category, setCategory] = useState();
    useEffect(() => {
        getCategoryById({id: 5}).then(setCategory)
    }, [category]);
    return (
        <section className="main-products-container">
            {category ? <CategorySection category={category}/> : 'page downloading...'}
        </section>
    )
}