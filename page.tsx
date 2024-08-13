"use client"

import { use, useState } from "react";
import CounterPanel from './components/CounterPanel';
import AboutPanel from './components/AboutPanel';
import FooterPanel from './components/FooterPanel';
import "./styles/globals.css";
import "./styles/navbar-styling.css";
import "./styles/counter-panel.css";

function HomePage() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Image Eye Care
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/products"> Home </a>
            </li>
            <li>
              <a href="/about"> About </a>
            </li>
            <li>
              <a href="/contact"> Services </a>
            </li>
            <li>
              <a href="/contact"> Team </a>
            </li>
            <li>
              <a href="/contact"> Feedback </a>
            </li>
            <li>
              <a href="/contact"> Info Centre </a>
            </li>
            <li>
              <a href="/contact"> Blogs </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </a>
          <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </nav>

      <div>
        <CounterPanel />
      </div>
      
      <div>
        <AboutPanel />
      </div>

      <div>
        <FooterPanel />
      </div>

    </>
  );
}

export default HomePage;