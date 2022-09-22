import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Homepage from "./home";
import {Navbar} from "./navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./footer";
import {NewPage} from "./new";
import SalePage from "./sale";
import ProductPage from "./product";
import ErrorHandler from "./errorhandler";
import Category from "./category";
import WishList from "./wishlist";
import Cart from "./cart";
import Search from "./search";
import './css/stylesForAllPages.css';
import "./css/home.css";
import "./css/footer.css";
import "./css/cartAndWishlist.css";
import "./css/product.css";
import "./css/404.css";
import './css/sorting.css';
import './css/pagination.css';
import './css/mainSection.css';
import './css/navbar.css';
import './css/mobileNavBar.css';
import {NavNumber} from "./navnumber";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavNumber>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="new" element={<NewPage/>}/>
                <Route path="sale" element={<SalePage/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="categories/dresses" element={<Category key={5} id={5}/>}/>
                <Route path="categories/shoes" element={<Category key={2} id={2}/>}/>
                <Route path="categories/bags" element={<Category key={4} id={4}/>}/>
                <Route path="/products/:id" element={<ProductPage/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="wishlist" element={<WishList/>}/>
                <Route path="*" element={<ErrorHandler/>}/>
            </Routes>
            <Footer/>
        </NavNumber>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
