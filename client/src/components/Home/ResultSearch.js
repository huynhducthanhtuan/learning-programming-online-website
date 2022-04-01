import React, {useState} from "react";
import Search from '../Header/Search'
import {list} from '../Header/apiSearch'
import Card from '../Home/Card'

const ResultSearch = () => {
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
    return (
        <div>
            < Search />
            {searchedProducts(result)}
        </div>
    )
}

export default ResultSearch
