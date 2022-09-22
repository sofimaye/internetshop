import React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="image-footer-wrapper">
                    <img src="/images/logo2.png" className="logo" alt="footer image"/>
                    </div>
                    <div className="footer-ul-container">
                        <ul className="category">
                            <li className="category-title">women</li>
                            {['t-shirts', 'trousers', 'dresses', 'bags', 'shoes'].map((page, index) => (
                                <li key={index}><a href="#" className="footer-link">{page}</a></li>
                            ))}
                        </ul>
                        <ul className="category">
                            <li className="category-title">men</li>
                            {['t-shirts', 'trousers', 'suits', 'bags', 'shoes'].map((page, index) => (
                                    <li key={index}><a href="#" className="footer-link">{page}</a></li>
                                ))}
                        </ul>
                    </div>
                </div>
                <p className="footer-title">about company</p>
                <p className="info">Our philosophy is to combine affordable with luxury.We provide the opportunity
                    to purchase the desired luxury items at a reasonable price. </p>
                <p className="info">support emails - sofi.mann99@gmail.com, customersupport@gmail.com</p>
                <p className="info">telephone - 555 777 5559</p>
                <div className="footer-social-container">
                    <div>
                        <a href="#" className="social-link">terms&services</a>
                        <a href="#" className="social-link">privacy page</a>
                    </div>
                    <div>
                        <a href="#" className="social-link">instagram</a>
                        <a href="#" className="social-link">facebook</a>
                    </div>
                </div>
            </footer>
        </>
    )
}