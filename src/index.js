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
import "./css/home.css";
import "./css/footer.css";
import "./css/cart.css";
import "./css/product.css";
import "./css/404.css";
import "./css/search.css";
// import ShoesPage from "./shoes";
// import BagsPage from "./bags";
import Category from "./category";

//create in folder src all components for pages
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              {/*<Route path="categories/:id" element={<Category/>}/>*/}
              {/*<Route path="cart" element={<Cart/>}/>*/}
              <Route path="new" element={<NewPage/>}/>
              <Route path="sale" element={<SalePage/>}/>
              <Route path="products/:id" element={<ProductPage/>}/>
              <Route path="categories/dresses" element={<Category id={5}/>}/>
              <Route path="categories/shoes" element={<Category id={2}/>}/>
              <Route path="categories/bags" element={<Category id={4}/>}/>
              {/*<Route path="search" element={<Search/>}/>*/}
              {/*<Route path="wishlist" element={<Wishlist/>}/>*/}
              {/*<Route path="404" element={<FourOFour/>}/>*/}
          </Routes>
          <Footer/>
      </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
