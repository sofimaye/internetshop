import {useEffect, useState} from "react";

export default function Sorting({sort}) {
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        if (sortOption === "lowest-price") {
            sort((a, b) => a.actualPrice - b.actualPrice);
        } else if (sortOption === "highest-price") {
            sort((a, b) => b.actualPrice - a.actualPrice);
        } else if (sortOption === 'sort-by-new') {
            sort((a, b) => b.id - a.id);
        }
    }, [sortOption]);

    return (
        <section id="select-section">
        <select id="select-sorting" onChange={({target}) => setSortOption(target.value)}>
            <option defaultValue> -- select an option -- </option>
            <option value="sort-by-new">sort by new</option>
            <option value="lowest-price">sort from lowest price</option>
            <option value="highest-price">sort from highest price</option>
        </select>
        </section>
    )
}