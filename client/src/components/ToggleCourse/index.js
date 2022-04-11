import React, { useState } from 'react'
import styles from "./Toggle.module.css";

const ToggleCourse = () => {
  function handleToggle(lessonsId) {
    if (document.getElementById(lessonsId).style.display == "none") {
      document.getElementById(lessonsId).style.display = "block";
    } else {
      document.getElementById(lessonsId).style.display = "none";
    }
  }
  return (
    <nav className={styles.courseContent}>
      <div className={styles.courseContentBox}>
        <span onClick={() => handleToggle("lessonsId")}>1.Bắt đầu</span>
        <ul id="lessonsId" >
          <li >1.Lời khuyên trước khoá học</li>
          <li >2. HTTP protocol</li>
          <li >3. SSR and CSR</li>
        </ul>
      </div>
      <div className={styles.courseContentBox}>
        <span onClick={() => handleToggle("lessonsId2")}>2.Kiến thức cốt lõi</span>
        <ul id="lessonsId2" >

          <li>1.Lời khuyên trước khoá học</li>
        </ul>
      </div>
      <div className={styles.courseContentBox}>
        <span onClick={() => handleToggle("lessonsId3")}>3.Xây dựng website</span>
        <ul id="lessonsId3">

          <li>3.Xây dựng website</li>
        </ul>
      </div>

    </nav>
  )
}

export default ToggleCourse
