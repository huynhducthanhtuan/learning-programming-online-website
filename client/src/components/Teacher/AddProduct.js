import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth";
import {createCourse, getCategories} from './apiTeacher'
import { Header } from "..";

import Axios from 'axios'

const AddCProduct = () => {
    
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        categories: [],
        category: [],
        pic: "",
        loading: false,
        error: "",
        createdCourse: "",
        redirectToProfile: false,
        success:""
    });

    const {
        name,
        description,
        price,
        categories,
        category,
        pic,
        loading,
        error,
        createdCourse,
        redirectToProfile,
        success

    } = values;
    const { token, user } = isAuthenticated();
    const init = () => {
       
        getCategories()
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setValues({...values, categories: data});
            }
        })
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if(image) {
            postImage()
        }
    },[image])
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]:  event.target.value});
    };
    const postImage = () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","ecommerce")
        data.append("cloud_name","dhzbsq7fj")
        Axios.post("https://api.cloudinary.com/v1_1/dhzbsq7fj/image/upload", data).then(res => setUrl(res.data.url))  
    }
    const clickSubmit = (event) => {
        event.preventDefault()
        
        const dataSubmit = {name, description, price, pic, category} 
        dataSubmit.pic = url 
        console.log("picture submit: ",dataSubmit.pic)
        console.log("dataSubmit: ", dataSubmit);

        createCourse(user._id, token, dataSubmit)
        .then(data => {
           
            if(data.error) {
                setValues({...values, error: data.error, success: false})
            }
            else {
                setValues({...values, success: true, error:""})
                
            }
        })

    }
    const showError = () => {
        return (
            <div className="alert alert-danger" style={{display: error? '': "none"}}>
                {error}
            </div>
        )
    }
    const showSuccess =  () => {
        return (
            <div className="alert alert-info" style={{display: success? '': "none"}}>
                Create product success. 
            </div>
        )
    }

  
    const newPostForm = () => {
        return (
        <form  onSubmit={clickSubmit}>
            <h4> Post Photo</h4>
            <div className= 'form-group'>
                    <label className='btn btn-secondary'>
                        <input
                            type='file'
                            name='photo'
                            onChange={(event) => setImage(event.target.files[0])}                                                                                        
                        />                    
                    </label>
                </div>
 
            <div className="form-group">
                <span className="text-muted">Name</span>
                <input onChange={handleChange('name')} type='text' className="form-control" value={name} />
            </div>
            <div className="form-group">
                <span className="text-muted">Description</span>
                <textarea onChange={handleChange('description')} className="form-control" value={description} ></textarea>
            </div>
            <div className="form-group">
                <span className="text-muted">Price</span>
                <input onChange={handleChange('price')} type='number' className="form-control" value={price} />
            </div>
            <div className="form-group">
                <span className="text-muted">Category</span>
                <select
                        className='form-control'
                        onChange={handleChange('category')}>
                        <option
                            value=''>
                                -- Please select --
                        </option>
                        {categories && categories.map((c, i) => {
                            return(
                                <option
                                    key={i}
                                    value={c._id}>
                                    {c.name}
                                </option>
                            );
                        })}                                     
                    </select>
            </div>
            <button className="btn btn-outline-primary mb-4">Create Course</button>
        </form>
        );
    };

    return (
        <div>
            
            <Layout
                title="Add a new Course"
                description={`${user.name} Ready to add a new Course`}
                >
                <div className="container col-md-5 ">
                    {showError()}
                    {showSuccess()}
                    {newPostForm()}
                    <Link to="/admin/dashboard" className="text-warning">
                        Go dashboard
                    </Link>
                </div>
            </Layout>
        </div>
    );
}

export default AddCProduct
