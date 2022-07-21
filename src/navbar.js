import React from "react";
import {countCartItems} from "./data.js";
import {useState} from "react";
import {Link} from "react-router-dom";


// main navbar for big screens
export function Searchbox(){
    const [search, setSearch] = useState();
    return(
        <div className="search">
            <input type="text" className="search-box" onChange={setSearch} placeholder="search brand, product" value={search}/>
            <button className="search-btn"
                    onClick={window.location.href = `search.html?search=${search}`}>Search</button>
        </div>
    )
}

export function Navbar(){
    return(
    <>
    <div className="nav">
        <img src="./images/logo.png" className="brand-logo" alt="logo"/>
            <div className="nav-items">
                <Searchbox/>
                <a href="#"><img src="./images/user-90.png" alt="user"/></a>
                <a href="wishlist.html"><img src="./images/heart-90.png" alt="wishlist"/></a>
                <a href="cart.html"><img src="./images/shopping-cart-64%20(1).png" alt="cart"/>
                    <span
                    className="cart-number">
                        {countCartItems().then((number) => `${number}`)}
                    </span>
                </a>
            </div>
    </div>
    <ul className="links-container">
        <li className="link-item"><a href="./home.html" id="home-page" className="link">home</a></li>
        <li className="link-item"><a href="./new.html" id="new-page" className="link">new</a></li>
        <li className="link-item"><a href="./bags.html" className="link">bags</a></li>
        <li className="link-item"><a href="./shoes.html" className="link">shoes</a></li>
        <li className="link-item"><a href="./dresses.html" className="link">dresses</a></li>
        <li className="link-item"><a href="./sale.html" className="link">sale</a></li>
    </ul>

        {
            // countCartItems().then((number) => {
            //     let quantityOfCardInTheNavbar = document.querySelector(".cart-number");
            //     quantityOfCardInTheNavbar.innerHTML = `${number}`;
            // })
        }
    </>
    )
}