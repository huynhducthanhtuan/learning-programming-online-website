import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addItem } from '../Cart/helperCart';

const Card = ({course}) => {
    const navigate = useNavigate()
    const [redirect, setRedirect] = useState(false)

    const addToCart = () => {
        addItem(course, () => {
            setRedirect(true)
        })   
    }
    const shouldRedirect = (redirect) => {
        if(redirect) {
          return navigate('/cart')
        }
      }
    const showAddToCart = () => {
        return (
            <button className='btn btn-outline-info mt-2 mb-2' onClick={addToCart}>
            Add to cart
            </button>
        )
    }

    return (
        <div key={course._id} className='card' style={{height: "100%"}}>
            <img className="card-img-top" src={course.image} alt=""></img>
            <div className='card-header'>{course.name}</div>
            <div className='card-body'>
                <p>{course.description.goal}</p>
                <p>${course.price}</p>
                <p>Sold {course.sold}</p>
                
                <Link to={`/course/${course._id}`} >
                    <button className='btn btn-outline-warning mt-2 mb-2'>
                        View detail
                    </button>
                </Link>
                {showAddToCart()}
                {shouldRedirect(redirect)}
            </div>
        </div>
    )
}

export default Card