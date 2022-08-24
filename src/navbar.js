import React, {useCallback} from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {countCartItems} from "./data/data";
import {useNavbarNum} from "./navnumber";

function MobileNavBarOpen({onClose}) {
    return (
        <>
            <div className="closeNav">
                <button className="close" onClick={onClose}>
                    <img src="/images/close.svg" alt="close menu button"/>
                </button>
            </div>
            <div className="navBarContainerForHiddenItems">
                <div className="navMobileSearchBar">
                    <Searchbox onClose={onClose}/>
                </div>
                <ul>
                    <Link className="link-mobile-item" to="/" onClick={onClose}>
                        <li className="link">Home</li>
                    </Link>
                    <Link className="link-mobile-item" to="new" onClick={onClose}>
                        <li className="link">New</li>
                    </Link>
                    <Link className="link-mobile-item" to="categories/bags" onClick={onClose}>
                        <li className="link">Bags</li>
                    </Link>
                    <Link className="link-mobile-item" to="categories/shoes" onClick={onClose}>
                        <li className="link">Shoes</li>
                    </Link>
                    <Link className="link-mobile-item" to="categories/dresses" onClick={onClose}>
                        <li className="link">Dresses</li>
                    </Link>
                    <Link className="link-mobile-item" to="/sale" onClick={onClose}>
                        <li className="link">Sale</li>
                    </Link>
                </ul>
                <div className="login-wishlist-cart">
                    <a href="#">
                        <img src="/images/user-90.png" alt="user profile"/>
                    </a>
                    <Link to="wishlist" onClick={onClose}>
                        <img src="/images/heart-90.png" alt="wishlist"/>
                    </Link>
                    <Link to="cart" onClick={onClose}>
                        <img src="/images/shopping-cart-64.png" alt="cart"/>
                       <NavbarNumberOfProducts/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export function MobileNavBar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.querySelector('body').style.overflow = "hidden";
        }
        return () => {
            document.querySelector('body').style.overflow = "auto";
        }
    });

    const handleHamButtonClick = useCallback(() => setOpen((prev) => !prev), []);

    if (open) {
        return <MobileNavBarOpen onClose={handleHamButtonClick}/>
    }

    return (
        <>
            <div className="navbarForMobiles">
                <button className="hamNavButton" onClick={handleHamButtonClick}>
                    <img src="/images/hamburger-menu.svg" alt="hamburger menu button"/>
                </button>
            </div>
        </>
    )
}


export function Searchbox({onClose}) {
    const [search, setSearch] = useState("");
    
    return (
        <div className="search">
            <input type="text" className="search-box" onChange={({target}) => setSearch(target.value)}
                   placeholder="search brand, product"
                   value={search}/>
            <Link to={`search?search=${search}`} onClick={onClose}>
            <button className="search-btn">Search</button>
            </Link>
        </div>
    )
}

export function NavbarNumberOfProducts(){
    const quantityOfCartNumber = useNavbarNum();
    const [cartNumber, setCartNumber] = useState();

    useEffect(() => {
        countCartItems().then(setCartNumber)
    }, [quantityOfCartNumber.cartQuantity])

    return(
        <span className="cart-number">
            {cartNumber}
        </span>
    )
}

export function NavbarForBigScreens() {
    return (
        <nav className="navbar">
            <div className="nav">
                <img src="/images/logo.png" className="brand-logo" alt="logo"/>
                <div className="nav-items">
                    <Searchbox/>
                    <a href="#"><img src="/images/user-90.png" alt="user"/></a>
                    <Link to="/wishlist"><img src="/images/heart-90.png" alt="wishlist"/></Link>
                    <Link to="/cart">
                        <img src="/images/shopping-cart-64%20(1).png" alt="cart"/>
                        <NavbarNumberOfProducts/>
                    </Link>
                </div>
            </div>
            <ul className="links-container">
                <li className="link-item"><Link to="/" className="link">Home</Link></li>
                <li className="link-item"><Link to="new" className="link">New</Link></li>
                <li className="link-item"><Link to="categories/bags" className="link">Bags</Link></li>
                <li className="link-item"><Link to="categories/shoes" className="link">Shoes</Link></li>
                <li className="link-item"><Link to="categories/dresses" className="link">Dresses</Link></li>
                <li className="link-item"><Link to="sale" className="link">Sale</Link></li>
            </ul>
        </nav>
    )
}

const isMobileBar = () => window.innerWidth < 801;

export function Navbar() {
    const [mobileBar, setMobileBar] = useState(isMobileBar());
    useEffect(() => {
        window.addEventListener('resize', () => setMobileBar(isMobileBar()))
        return () => {
            window.removeEventListener('resize', () => setMobileBar(isMobileBar()));
        }
    }, []);
    return (
        mobileBar ? <MobileNavBar/> : <NavbarForBigScreens/>
    )
}
