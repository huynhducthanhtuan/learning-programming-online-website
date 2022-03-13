import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <Link to="/">
                <div className={styles.headerLogo}>
                    <img alt="" src="./icons/logo.png"></img>
                </div>
            </Link>
            <div className={styles.headerSearch}>
                <img alt="" src="./icons/search.png"></img>
                <input type="text" name="search" placeholder="search"></input>
            </div>
            <div className={styles.headerButton}>
                <Link to="/">
                    <div className={styles.buttonSign}>
                        <p>Sign up</p>
                    </div>
                </Link>
                <Link to="/">
                    <div className={styles.buttonSign}>
                        <p>Sign in</p>
                    </div>
                </Link>
            </div>

        </header >
    );
};

export default Header;
