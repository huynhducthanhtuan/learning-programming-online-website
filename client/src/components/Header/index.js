import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from '../../App'
import Search from '../Header/Search'
import Card from '../Home/Card'
import {isAuthenticated} from '../Auth/index'
import { itemTotal } from "../Cart/helperCart";
import Modal from "../model/Modal";
import styles from "./Header.module.css";
import logo from '../../assets/images/logo192.png'

const Header = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate()
   

    const signOutAction = () => {
        localStorage.clear()
        dispatch({type: "CLEAR"})
        navigate('/')
        setModalOpen(false)
    }
    console.log("isAuthenticated ",isAuthenticated())
    const renderList = () => {
        if(isAuthenticated()) {
            return (
               <div className="d-flex">
                    <div className={styles.headerButton}>                 
                        <button className="btn btn-info openModalBtn"  onClick={() => {
                            setModalOpen(true);
                        
                        }} >sign Out</button>   
                    </div> 
                    <div className={`${styles.headerButton } ml-4`}>                 
                        <Link to="/cart">
                            <button className="btn btn-info ">Cart <sup><small className={styles.cartBadge}>{itemTotal()}</small></sup> </button>   
                        </Link>
                    </div> 
               </div>
                
            )
        }
        else {
            return (
                <div className={styles.headerButton}>
                    <Link to="/signup">                  
                        <button className="btn btn-secondary">Sign up</button>   
                    </Link>
                    <Link to="/signin ">
                        <button className="btn btn-secondary ml-4 mr-4">Sign In</button>
                    </Link>
                </div>
            )
        }
    }

    return (
        <div>
            {modalOpen && <Modal body="Are you sure you want to sign out?" setOpenModal={setModalOpen} action={signOutAction}  />}
             <header className={`container ${styles.header}`}>
                <Link to="/">
                    <div className={styles.headerLogo}>
                        <img alt="" src={logo}></img>
                    </div>
                </Link>
                <Link to="/shop " className="nav-link">
                        <button className="btn btn-secondary ">Shop</button>
                </Link>
                <Link to="/admin/dashboard " className="nav-link">
                        <button className="btn btn-secondary ">DashBoard</button>
                </Link>
                <Search />
                {renderList()}
               
            </header >
            
        </div>
       
    );
  };


export default Header;
