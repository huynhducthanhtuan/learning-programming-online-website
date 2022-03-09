import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.headerLogo}>
                <img src="./icons/logo.png"></img>
            </div>
            <div className={styles.headerSearch}>
                <img src="./icons/search.png"></img>
                <input type="text" name="search" placeholder="search"></input>
            </div>
            <div className={styles.buttonSign}>
                <p>Sign up</p>
            </div>
            <div className={styles.buttonSign}>
                <p >Sign in</p>
            </div>
        </header >
    );
};

export default Header;
