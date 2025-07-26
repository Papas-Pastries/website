import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/layout.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Papa's Pastries" />
      </div>
      <ul className={styles.navlinks}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/catering">Catering</NavLink></li>
      </ul>
    </nav>
  );
}