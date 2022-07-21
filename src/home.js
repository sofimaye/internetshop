// component for home page ui
import React, {useEffect, useState} from "react";
import Footer from "./footer";
import  {Navbar}  from "./navbar";
import MobileNavBar from "./mobilenavbar";

const isMobileBar = () => window.innerWidth < 801;
export default function Homepage(){
    const [mobileBar, setMobileBar] = useState(isMobileBar());
    useEffect(() => {
        window.addEventListener('resize', () => setMobileBar(isMobileBar()))
        return () => {
            window.removeEventListener('resize', () => setMobileBar(isMobileBar()));
        }
    }, []);
    return(
        <>
            {mobileBar ? <nav className="navbar"><Navbar/></nav> : <div className="navbarForMobiles"><MobileNavBar/></div>}
            <header className="hero-section">
                <div className="content">
                    <img src="../images/transparentlogo.png" className="logo" alt="logo"/>
                        <p className="sub-heading">ukrainian resale shop</p>
                </div>
            </header>
            <section className="main-products-container"></section>
            <section className="collection-container">
                <a href="#" className="collection">
                    <img src="../images/dressandflowers (1).jpg" alt="logo"/>
                        <p className="collection-title"> women <br>apparels</br></p>
                </a>

                <a href="#" className="collection">
                    <img src="../images/menstyle.jpg" alt="logo"/>
                        <p className="collection-title"> men <br>apparels</br></p>
                </a>

                <a href="#" className="collection">
                    <img src="../images/bagscollection.jpg" alt="logo"/>
                        <p className="collection-title"> bags <br>apparels</br></p>
                </a>

            </section>
            <footer><Footer/></footer>
        </>
    )
}