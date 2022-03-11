import React from "react";
import { Link } from "react-router-dom";
import styles from "./profile.module.css";

const profile = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.profileBackground}>
                <img src="./icons/backgroundProfile.png"></img>
            </div>
            <div className={styles.profileAvatar}>
                <img src="./icons/avatar.png"></img>
            </div>
            <div className={`container ${styles.profileText}`}>
                <h1>Personal Information</h1>
                <form name="personalInformation" className="row">
                    <div className={` col ${styles.formBox}`}>
                        <label for="name">Full Name: </label>
                        <input type="text" id="name" placeholder="Enter full name"></input>
                        <label for="phone">Phone number: </label>
                        <input type="text" id="phone" placeholder="Enter phone number"></input>
                        <label for="education">Education: </label>
                        <input type="text" id="education" placeholder="Enter education"></input>
                        <label for="age">Age: </label>
                        <input type="text" id="age" placeholder="Enter age"></input>
                    </div>
                    <div className={` col ${styles.formBox}`}>
                        <label for="email">Email: </label>
                        <input type="text" id="email" placeholder="Enter email"></input>
                        <label for="work">Work: </label>
                        <input type="text" id="work" placeholder="Enter work"></input>
                        <label for="userName">User name: </label>
                        <input type="text" id="userName" placeholder="Enter user name"></input>
                        <label for="fb">Facebook: </label>
                        <input type="text" id="fb" placeholder="Enter facebook"></input>
                    </div>
                </form>
                <button type="button" className={styles.btnUpdate}>Update</button>
            </div>
        </section>
    )
}

export default profile
