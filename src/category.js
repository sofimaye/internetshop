//в залежності від категорії сторінки відобразити певну категорію товарів які мають бути на цій сторінці
import {useEffect, useState} from "react";
import {getCategoryById} from "./data/data";
import {CategorySection} from "./new";

export default function Category({id}){
    const [category, setCategory] = useState();

    useEffect(() => {
        let isMounted = true;
        getCategoryById({id: id}).then((category) => {
            if(isMounted){
                setCategory(category)
            }
        }
    );
        return () => {
            isMounted = false;
        };
    }, [category])

    return (
        <section className="main-products-container">
            {category ? <CategorySection category={category}/> : 'page downloading...'}
        </section>
    )
}