export default function Pagination ({productsPerPage, totalProducts, paginate, currentPage}){
    const productsNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        productsNumbers.push(i);
    }

    return(
        <nav className="paginate">
            <ul className="pagination">
                { productsNumbers.length > 1 &&
                    productsNumbers.map((number) => (
                        <li key={number} className="page" id={number}>
                            <a onClick={() => paginate(number)} href="#"
                               className={currentPage === number ? 'currentPage' : 'page-link'}>
                                {number}
                            </a>
                        </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}