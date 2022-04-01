import React from 'react'
import styles from './Carted.module.css'
import { Link } from 'react-router-dom'

const Carted = ({course}) => {

    console.log(course);

    return (
        <div class={`${styles.courseItem} mt-4`}>
           <Link to={`/course/${course._id}`}> <img class={styles.courseItemImage} src={course.image} alt="" /></Link>
            <div class={styles.courseItemText}>
                <Link to={`/course/${course._id}`}>
                    <h6>{course.name}</h6>
                    <p>Learn<b> {course.category.name}</b>{course.description.goal}<b>{course.category.name}</b></p>
                </Link>
                <div class={styles.courseItemRate}>
                    <span>4.6</span>
                    {/* {showStart()} */}
                    <span>(64,668)</span>
                </div>
                <ul>35 total hours
                    <li>177 lectures</li>
                    <li>All Levels</li>
                </ul>
            </div>
            <div class={styles.courseItemCost}>
                <p>${course.price}</p>
            
            </div>
        </div>
    )
}
export default Carted