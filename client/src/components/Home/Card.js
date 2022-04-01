import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({course}) => {
    return (
       
            <div key={course._id} className='card' style={{height: "100%"}}>
                <img className="card-img-top" src={course.image} alt=""></img>
                <div className='card-header'>{course.name}</div>
                <div className='card-body'>
                    <p>{course.description}</p>
                    <p>${course.price}</p>
                    <p>Sold {course.sold}</p>
                    <button className='btn btn-outline-warning mt-2 mb-2'>
                            Add to card 
                    </button>
                </div>
            </div>
    )
}

export default Card