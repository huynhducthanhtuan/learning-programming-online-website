import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from '../../App'
import Search from '../Header/Search'
import {isAuthenticated} from '../Auth/index'
import { itemTotal } from "../Cart/helperCart";
import Modal from "../model/Modal";
import styles from "./Header.module.css";
import logo from '../../assets/images/logo192.png'
import cartIcon from '../../assets/icons/shopping-cart.png'
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate()
   
    const openMyCourses = () =>{
        return navigate('/mycourses')
    }

    const signOutAction = () => {
        toast.success('Sign Out Success')
        localStorage.removeItem('jwt');
        dispatch({type: "CLEAR"})
        navigate('/')
        setModalOpen(false)
    }
  
    const renderList = () => {
        if(isAuthenticated()) {
            return (
               <div className="d-flex">

                    <div className={`${styles.headerButton} ml-4`}>                 
                        <button className={`btn btn-outline-primary`} style={{marginRight: '55px'}}  onClick={
                            openMyCourses} >My Courses</button>   
                    </div> 

                    <div className={`${styles.headerButton }`}>                 
                        <Link to="/cart">
                            <div className={styles.cartIcon}>
                                <img className={styles.imageIcon} src={cartIcon} alt=""/>
                                <sup className={styles.quantityCart}><small className={styles.cartBadge}>{itemTotal()}</small></sup>  
                            </div>
                            
                        </Link>
                    </div> 
                    <div className={`${styles.headerButton} ml-4`}>                 
                        <button className="btn btn-info openModalBtn"  onClick={() => {
                            setModalOpen(true);
                        
                        }} >Sign Out</button>   
                    </div> 
                   
                    {/* <Link to="/admin/dashboard " className="nav-link">
                    <p >DashBoard</p>
                    </Link> */}
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
              
                <Search />
                {renderList()}
               
            </header >
            
        </div>
       
    );
  };


export default Header;
