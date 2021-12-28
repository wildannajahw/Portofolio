import React from "react";

import { Home, About } from './components';

import * as Unicons from '@iconscout/react-unicons';

import './assets/css/styles.css'
import './assets/css/swiper-bundle.min.css'


const App = () => {
    return (
        
        // <!--==================== HEADER ====================-->
        <div>
            <header className="header" id="header">
                <nav className="nav container nav__container">
                    <a href="" className="nav__logo">
                        Wildan
                    </a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">
                                    <Unicons.UilEstate className="nav__icon"/>Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <Unicons.UilUser className="nav__icon"/>About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <Unicons.UilFileAlt className="nav__icon"/>Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <Unicons.UilBriefcaseAlt className="nav__icon"/>Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i>
                                    <Unicons.UilScenery className="nav__icon"/>Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <Unicons.UilMessage className="nav__icon"/> Contactme
                                </a>
                            </li>   
                        </ul>
                        <Unicons.UilTimes id="nav-close" />
                        <i className="uil uil-times nav__close" id="nav-close"></i>
                    </div>

                    <div className="nav__btns">
                        {/* <!-- Theme change button --> */}
                        {/* <Unicons.UilMoon className="change-theme" id="theme-button" /> */}
                        
                        <i className="uil uil-moon change-theme" id="theme-button"></i>

                        <div className="nav__toggle" id="nav-toggle">
                            <Unicons.UilApps />
                        </div>
                    </div>
                </nav>
            </header>

            {/* <!--==================== MAIN ====================--> */}
            <main className="main">
                <Home />
                <About />
            </main>


            {/* <!--==================== FOOTER ====================--> */}
            <footer className="footer">
                <div className="footer__bg">
                    <div className="footer__container container grid">
                        <div>
                            <h1 className="footer__title">Wildan</h1>
                            <span className="footer__subtitle">Frontend developer</span>
                        </div>
                        

                        <ul className="footer__links">
                            <li>
                                <a href="#services" className="footer__link">Servivce</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer__link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__link">Contactme</a>
                            </li>
                        </ul>
                        <div className="footer__socials">
                            <a href="https://www.facebook.com/wildannajahw" target="_blank" className="footer__social">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/wildannajahw" target="_blank" className="footer__social">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://www.twitter.com/wildannajahw" target="_blank" className="footer__social">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                        </div>
                    </div>
                    <p className="footer__copy">&#169; Wildan. Allright reserved</p>
                </div>
                
            </footer>
            
            {/* <!--==================== SCROLL TOP ====================--> */}
            <a href="#" className="scrollup" id="scroll-up">
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
            
        </div>
        

        
    )
}


export default App;