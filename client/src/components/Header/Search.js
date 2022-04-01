import React,{useState} from "react";
import styles from "./Header.module.css";
import {list} from '../Header/apiSearch'
import Card from '../Home/Card'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import searchIcon from '../../assets/icons/search.png'


const Search = () => {

    

    const navigate = useNavigate()
    const [data, setData] = useState({
        search: '',
        result: [],
        searched: false
    })
    const { search, result, searched} = data
    const handleChange = name => e => {
        setData({...data, [name]: e.target.value, searched: false})
    }

    const searchData = () => {
        if(search) {
            list({search: search || undefined})
                .then(response => {
                    if (response.error) {
                        console.log(response.error)
                    }
                    else {
                        setData({...data, result: response, searched: true})
                    }
                  
                })
        }
    }
    const searchSubmit = (e) => {
        e.preventDefault()
        console.log(search);
        navigate(`/shop?search=${search}`)
    }

   
    const searchForm = () => {
        return (
            <form onSubmit={searchSubmit}>
                <div className={styles.headerSearch}>
                    <img alt="" src={searchIcon}></img>
                    <input type="search"  className='form-control' name="search" onChange={handleChange('search')} placeholder="Search by name"></input>
                </div>  
            </form>
        )
    }
   
    return (
        <div style={{height: "55px"}}>   
            <div className='container'> 
                {searchForm()}
            </div>
            <div className='container-fluid mb-3'>
                {/* {result && searchedProducts(result)} */}
            </div>
        </div>
    )
}

export default Search