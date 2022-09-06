import {useEffect, useState} from "react";
import {Product} from "./new";
import {getProductsByCategory} from "./data/data";
import Pagination from "./pagination";
import Sorting from "./sort";

export default function Category({id}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await getProductsByCategory({categoryId: id});
            setProducts(res);
            setLoading(false)
        }
        fetchPosts();
    }, [])


    if (loading) {
        return <img src="/images/Iphone-spinner-2.gif" alt="spinner"/>
    }

    // get current product page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <Sorting sort={(sorting) => setProducts([...products].sort(sorting))}/>
            <section className="main-products-container">
                {currentProducts.map((product) => <Product key={product.id} product={product}/>)}
            </section>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}
            currentPage={currentPage}/>
        </>
    )
}