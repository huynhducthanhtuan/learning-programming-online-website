import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./CourseDetail.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const CourseDetail = () => {

const [toggle, setToggle] = useState("parts")

function lessonsList(lessonsId, buttonId) {
  if (
    document.getElementById(lessonsId).style.display == "none" ||
    document.getElementById(lessonsId).style.display == ""
  ) {
    document.getElementById(lessonsId).style.display = "block";
    document.getElementById(buttonId).style.transform = "rotate(180deg)";
  } else {
    document.getElementById(lessonsId).style.display = "none";
    document.getElementById(buttonId).style.display = "rotate(360deg)"
  }
}


  return (
    <section>
      <div className={`container ${styles.courseContainer}`}>
        <Header />
      </div>

      <div className={styles.course}>

        <div className={styles.courseVideoAndNotes}>
          <iframe className={styles.courseVideo} src="https://www.youtube.com/embed/R0jbjEX0dBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>

          <div className={styles.courseTabs} >
            
            <div className={toggle === "parts" ? `${styles.tabItem} ${styles.active}` : `${styles.tabItem}`} onClick={()=>setToggle("parts")}>
              <h6>
                <button >
                  <span>Parts</span>
                </button>
              </h6>

            </div>

            <div className={toggle === "comments" ? `${styles.tabItem} ${styles.active}` : `${styles.tabItem}`} onClick={()=>setToggle("comments")} >
              <h6>
                <button >
                  <span>Comments</span>
                </button>
              </h6>
              
            </div>

          </div>

          <div></div>

          <div className="tabContents">
            <div className={toggle === "parts" ? `${styles.tabContent} ${styles.active}` : `${styles.tabContent}`}  > 
              <div className={styles.courseCreateNote}>
                <button className={styles.courseNewNoteButton}>
                  <span>Create new note at 
                    <span>0:00</span>
                  </span>
                  
                  <img src="./icons/add.png"/>

                </button>

                <div className={styles.courseFilter}>

                  <div className={styles.courseFilterAllParts}>
                    <button className={styles.courseFilterAllPartsButton}>
                      <span>All Parts</span>
                      <img src="./icons/drop-down-arrow.png"/>
                    </button>
                  </div>

                  <div className={styles.courseFilterCurrentPart}>
                    <button className={styles.courseFilterCurrentPartButton}>
                      <span>Current Part</span>
                    </button>
                  </div>              

                </div>

                <div className={styles.courseNoNote}>Click the "Create new note" box, the "+" button to make your first note</div>

                <div className={styles.courseNote}>

                  <div className={styles.courseNoteTimes}>
                    <span>0:00</span>  
                  </div>  

                  <div className={styles.courseNoteDetail}>

                    <div className={styles.courseNoteTitle}>

                      <div className={styles.courseNoteTitleName}>
                        <div>Part 1: Get started</div>
                        <div>1. What is HTML, CSS?</div>
                      </div>

                      <div className={styles.courseSpacer}></div>
                      
                      <button className={styles.courseNoteButton}>
                        <img src="./icons/pen.png"/>
                      </button>

                      <button className={styles.courseNoteButton}>
                        <img src="./icons/trash-can.png"/>
                      </button>

                    </div>

                    <div className={styles.courseNoteParam}>
                      <div>
                        <p>attribute: là các thuộc tính trong thẻ</p>
                      </div>
                    </div>

                  </div>

                </div>  

            </div>

            </div>

            <div className={toggle === "comments" ? `${styles.tabContent} ${styles.active}` : `${styles.tabContent}`} >

              <form className={styles.courseComment}>
                <img src="./images/avatar.jpg" className={styles.courseAvatar} />
                <input className={styles.courseInputComment} type="text" ></input>
                <img src="./icons/send.png" className={styles.courseSendIcon}/>
              </form>

              <div className={styles.courseAllComments}>

                <form className={styles.courseAComment}>
                  <img src="./images/avatar.jpg" className={styles.courseAvatar} />
                  <div className={styles.courseCommentContent}>
                    <h5 className={styles.courseCommentName}>Nguyễn Lê Phong</h5>
                    <div>
                      <p>Bài học rất dễ hiểu recommend các bạn nên học</p>
                    </div>
                  </div>
                </form>

              </div>

            </div>
          </div>

        </div>

        <div className={styles.courseParts}>
          <section>
            <div className={styles.courseHeader}>
              <p>Course Detail</p>
            </div>

            <div className={styles.courseAllParts}>
              <div className={styles.coursePart}>
                <div className={styles.coursePartHeader} onClick={() => lessonsList("allLessons1", "dropIcon1")}>
                  <div>
                    <p>Part 1: Get started</p>
                  </div>

                  <img
                    id="dropIcon1"
                    className={styles.courseDropDownIcon}
                    src="./icons/drop-down-arrow.png"
                    
                  />
                </div>

                <div id="allLessons1" className={styles.courseAllLessons}>
                  <div className={styles.courseLesson}>
                    <p>1. What is HTML, CSS?</p>
                    <div className={styles.courseVideoTimes}>
                      <img src="./icons/play-button.png"/>
                      <p>1:10</p>
                    </div>
                  </div>

                  <div className={styles.courseLesson}>
                    <p>2. Get know to Dev tools</p>
                    <div className={styles.courseVideoTimes}>
                      <img src="./icons/play-button.png"/>
                      <p>5:20</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.coursePart}>
                <div className={styles.coursePartHeader} onClick={() => lessonsList("allLessons2", "dropIcon2")}>
                  <div>
                    <p>Part 2: Get familiar with HTML</p>
                  </div>

                  <img
                    id="dropIcon2"
                    className={styles.courseDropDownIcon}
                    src="./icons/drop-down-arrow.png"
                    
                  />
                </div>

                <div id="allLessons2" className={styles.courseAllLessons}>
                  <div className={styles.courseLesson}>
                    <p>1. Tag</p>
                    <div className={styles.courseVideoTimes}>
                      <img src="./icons/play-button.png"/>
                      <p>10:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>

      </div>

      <div className={styles.courseFooter}>
        <Footer/>
      </div>

    </section>
  );
};

export default CourseDetail;