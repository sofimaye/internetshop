import {Searchbox} from "./navbar";
import {useState} from "react";
import {Link} from "react-router-dom";

function MobileNavBarOpen({onClose}){
    return(
      <>
          <div className="closeNav" style="display:block;">
              <button className="close" style="display:flex;" onClick={onClose}>
                  <img src="../images/close.svg" alt="close menu button"/>
              </button>
          </div>
          <div className="navBarContainerForHiddenItems">
              <div className="navMobileSearchBar">
                  <Searchbox/>
              </div>
              <ul>
                  <Link className="link-mobile-item" to="/"><li className="link">Home</li></Link>
                  <Link className="link-mobile-item" to="/new"><li className="link">New</li></Link>
                  <Link className="link-mobile-item" to="/categories/:4"><li className="link">Bags</li></Link>
                  <Link className="link-mobile-item" to="/categories/:2"><li className="link">Shoes</li></Link>
                  <Link className="link-mobile-item" to="/categories/:5"><li className="link">Dresses</li></Link>
                  <Link className="link-mobile-item" to="/sale"><li className="link">Sale</li></Link>
              </ul>
              <div className="login-wishlist-cart">
                  <a href="#">
                      <img src="../images/user-90.png" alt="user profile"/>
                  </a>
                  <a href="wishlist.html">
                      <img src="../images/heart-90.png" alt="wishlist"/>
                  </a>
                  <a href="cart.html">
                      <img src="../images/shopping-cart-64.png" alt="cart"/>
                      <span className="cart-number"></span>
                  </a>
              </div>
          </div>
      </>
    )
}
export default function MobileNavBar(){
    const [open, setOpen] = useState(false);
    if(open){
        return(
            <MobileNavBarOpen onClose={() => setOpen(!open)}/>
        )
    }
    return(
        <div className="navbarForMobiles">
        <button className="hamNavButton" onClick={() => setOpen(!open)}>
            <img src="../images/hamburger-menu.svg" alt="hamburger menu button"/>
        </button>
        </div>
    )
}