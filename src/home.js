import React from "react";

export default function Homepage() {
    return (
        <>
            <header className="hero-section">
                <div className="content">
                    <img src="/images/transparentlogo.png" className="logo" alt="logo"/>
                    <p className="sub-heading">ukrainian resale shop</p>
                </div>
            </header>
            <section className="main-products-container"></section>
            <section className="collection-container">
                <a href="#" className="collection">
                    <img src="/images/dressandflowers (1).jpg" alt="logo"/>
                    <p className="collection-title"> women apparels </p>
                </a>
                <a href="#" className="collection">
                    <img src="/images/menstyle.jpg" alt="logo"/>
                    <p className="collection-title"> men apparels </p>
                </a>
                <a href="#" className="collection">
                    <img src="/images/bagscollection.jpg" alt="logo"/>
                    <p className="collection-title"> bags apparels </p>
                </a>
            </section>
        </>
    )
}