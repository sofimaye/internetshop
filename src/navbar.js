import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

//navbar for mobile screens
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
                    <Searchbox/>
                </div>
                <ul>
                    <Link className="link-mobile-item" to="/">
                        <li className="link">Home</li>
                    </Link>
                    <Link className="link-mobile-item" to="new">
                        <li className="link">New</li>
                    </Link>
                    <Link className="link-mobile-item" to="categories/bags">
                        <li className="link">Bags</li>
                    </Link>
                    <Link className="link-mobile-item" to="categories/shoes">
                        <li className="link">Shoes</li>
                    </Link>
                    <Link className="link-mobile-item" to="categories/dresses">
                        <li className="link">Dresses</li>
                    </Link>
                    <Link className="link-mobile-item" to="/sale">
                        <li className="link">Sale</li>
                    </Link>
                </ul>
                <div className="login-wishlist-cart">
                    <a href="#">
                        <img src="/images/user-90.png" alt="user profile"/>
                    </a>
                    <a href="wishlist.html">
                        <img src="/images/heart-90.png" alt="wishlist"/>
                    </a>
                    <a href="cart.html">
                        <img src="/images/shopping-cart-64.png" alt="cart"/>
                        <span className="cart-number"></span>
                    </a>
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

    if (open) {
        return <MobileNavBarOpen onClose={() => setOpen(!open)}/>
    }
    return (
        <>
            <div className="navbarForMobiles">
                <button className="hamNavButton" onClick={() => setOpen(!open)}>
                    <img src="/images/hamburger-menu.svg" alt="hamburger menu button"/>
                </button>
            </div>
        </>
    )
}

// search box
export function Searchbox() {
    const [search, setSearch] = useState("");
    return (
        <div className="search">
            <input type="text" className="search-box" onChange={({target}) => setSearch(target.value)}
                   placeholder="search brand, product"
                   value={search}/>
            <button className="search-btn"
                    onClick={() => window.location.href = `search.html?search=${search}`}>Search
            </button>
        </div>
    )
}

// main navbar for big screens
export function NavbarForBigScreens() {
    return (
        <nav className="navbar">
            <div className="nav">
                <img src="/images/logo.png" className="brand-logo" alt="logo"/>
                <div className="nav-items">
                    <Searchbox/>
                    <a href="#"><img src="/images/user-90.png" alt="user"/></a>
                    <Link to="/wishlist"><img src="/images/heart-90.png" alt="wishlist"/></Link>
                    <a href="cart.html">
                        <img src="/images/shopping-cart-64%20(1).png" alt="cart"/>
                        <span className="cart-number">0
                            {/*{countCartItems().then((number) => `${number}`)}*/}
                        </span>
                    </a>
                </div>
            </div>
            <ul className="links-container">
                <li className="link-item"><Link to="/" id="home-page" className="link">Home</Link></li>
                <li className="link-item"><Link to="new" id="new-page" className="link">New</Link></li>
                <li className="link-item"><Link to="categories/bags" className="link">Bags</Link></li>
                <li className="link-item"><Link to="categories/shoes" className="link">Shoes</Link></li>
                <li className="link-item"><Link to="categories/dresses" className="link">Dresses</Link></li>
                <li className="link-item"><Link to="sale" className="link">Sale</Link></li>
            </ul>

            {
                // countCartItems().then((number) => {
                //     let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
                //     quantityOfCardInTheNavbar.innerHTML = `${number}`;
                // })
            }
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
