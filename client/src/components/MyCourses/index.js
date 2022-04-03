import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "..";
import Carted from "../Carted";
import {getUserHasCourses} from './apiMyCourses'
import {isAuthenticated} from '../Auth'
import { ToastContainer, toast } from 'react-toastify';

const MyCourses = ({}) => {
    const {token, user } = isAuthenticated([])

    const [userHasCourses, setUserHasCourses] = useState()
    
    
    useEffect(() => {
        getUserHasCourses(user._id, token)
            .then(user => {
               if(user.error) {
                   toast.error(user.error)
               }else {
                   setUserHasCourses(user)
               }
            })
    },[])

    console.log(userHasCourses);
    return (
        <div>
        <Header />
        <div className="container-fluid">
        {userHasCourses &&
            userHasCourses.coursesId.map((course, i) => {
                return(
                    <Carted course={course} />
                )
            } ) 
        }
        </div>
        
        </div>
       
    )
};

export default MyCourses;
