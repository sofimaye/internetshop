import React, {useCallback} from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {countCartItems} from "./data/data";
import {useNavbarNum} from "./navnumber";

const routes = {
    home: "/",
    new: "new",
    bags: "categories/bags",
    shoes: "categories/shoes",
    dresses: "categories/dresses",
    sale: "/sale"
}

export function MobileNavBarOpen({onClose}) {
    return (
        <nav className="mobileNavbarOpened">
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
                    {Object.entries(routes).map(([name, url], index) => (
                        <Link className="link-mobile-item" key={index} to={url} onClick={onClose}>
                            <li className="link">{name}</li>
                        </Link>
                    ))}
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
        </nav>
    )
}

export function MobileNavBar() {
    const [open, setOpen] = useState(false);

    //think about better implementation
    useEffect(() => {
        if (open) {
            Array.from(document.querySelectorAll('#root>*:not(.mobileNavbarOpened)'))
                .map(item => item.style.visibility = "hidden")
            document.querySelector('.mobileNavbarOpened').style.display = 'block';
        }
        return () => {
            Array.from(document.querySelectorAll('#root>*:not(.mobileNavbarOpened)'))
                .map(item => item.style.visibility = "visible")
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

export function NavbarNumberOfProducts() {
    const quantityOfCartNumber = useNavbarNum();
    const [cartNumber, setCartNumber] = useState();

    useEffect(() => {
        countCartItems().then(setCartNumber)
    }, [quantityOfCartNumber.cartQuantity])

    return (
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
                {
                    Object.entries(routes).map(([name, url], index) => (
                        <li className="link-item" key={index}>
                            <Link to={url} className="link">{name}</Link>
                        </li>
                    ))
                }
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
