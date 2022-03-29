import React,{useState} from "react";
import styles from "./header.module.css";
import {list} from '../Header/apiSearch'
import Card from '../Home/Card'
import { Link, useNavigate } from "react-router-dom";
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
        searchData()
        // navigate(`/shop?search=${search}`)
    }
    const searchMessage = (searched, result) => {
        if(searched && result.length > 0 ) {
            return `Found ${result.length} products`
        }
        if(searched &&  result.length <= 0) {
            return "No product found"
        }
    }
    const searchedProducts = (result = []) => {
        return(
            <div>
                <h2 className='mt-4 bm-4'>
                    {searchMessage(searched, result)}
                </h2>
                <div className='row'>
                    {result && result.map((p, i) => (
                        <div key= {i} className='col-4 mb-3'>
                            <Card
                                key={i}
                                course={p}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    const searchForm = () => {
        return (
            <form onSubmit={searchSubmit}>
                <div className={styles.headerSearch}>
                    <img alt="" src="./icons/search.png"></img>
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
                {searchedProducts(result)}
            </div>
        </div>
    )
}

export default Search