import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./CourseDetail.module.css";
import {
  addIcon,
  dropIcon,
  penIcon,
  trashIcon,
  avatarImage,
  sendIcon,
  playIcon,
} from "./exportImage";
import { read } from "../Course/aipCourse";
import { readLesson } from "./apiCourseDetail";
import LessonDetail from "./LessonDetail";
import VideoCourse from "./VideoCourse";
import ToggleCourse from "../ToggleCourse";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CourseDetail = () => {
  const query = useQuery();
  const lessonId = query.get("lessonId");

  const [toggle, setToggle] = useState("parts");
  const [course, setCourse] = useState();
  const [error, setError] = useState();
  const { courseId } = useParams();

  const loadSingleProduct = (courseId) => {
    read(courseId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCourse(data);
      }
    });
  };

  useEffect(() => {
    loadSingleProduct(courseId);
  }, []);

  return (
    <section>
      <Header />

      <div className={styles.course}>
        <div className={styles.courseVideoAndNotes}>
          <VideoCourse lessonId={lessonId} />

          <div className={styles.courseTabs}>
            <div
              className={
                toggle === "parts"
                  ? `${styles.tabItem} ${styles.active}`
                  : `${styles.tabItem}`
              }
              onClick={() => setToggle("parts")}
            >
              <h6>
                <button>
                  <span>Parts</span>
                </button>
              </h6>
            </div>

            <div
              className={
                toggle === "comments"
                  ? `${styles.tabItem} ${styles.active}`
                  : `${styles.tabItem}`
              }
              onClick={() => setToggle("comments")}
            >
              <h6>
                <button>
                  <span>Comments</span>
                </button>
              </h6>
            </div>
          </div>

          <div></div>

          <div className="tabContents">
            <div
              className={
                toggle === "parts"
                  ? `${styles.tabContent} ${styles.active}`
                  : `${styles.tabContent}`
              }
            >
              <div className={styles.courseCreateNote}>
                <button className={styles.courseNewNoteButton}>
                  <span>
                    Create new note at
                    <span>0:00</span>
                  </span>

                  <img src={addIcon} />
                </button>

                <div className={styles.courseFilter}>
                  <div className={styles.courseFilterAllParts}>
                    <button className={styles.courseFilterAllPartsButton}>
                      <span>All Parts</span>
                      <img src={dropIcon} />
                    </button>
                  </div>

                  <div className={styles.courseFilterCurrentPart}>
                    <button className={styles.courseFilterCurrentPartButton}>
                      <span>Current Part</span>
                    </button>
                  </div>
                </div>

                <div className={styles.courseNoNote}>
                  Click the "Create new note" box, the "+" button to make your
                  first note
                </div>

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
                        <img src={penIcon} />
                      </button>

                      <button className={styles.courseNoteButton}>
                        <img src={trashIcon} />
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

            <div
              className={
                toggle === "comments"
                  ? `${styles.tabContent} ${styles.active}`
                  : `${styles.tabContent}`
              }
            ></div>
          </div>
        </div>
        {course && <ToggleCourse course={course} />}
      </div>
      <div className={styles.courseFooter}>
        <Footer />
      </div>
    </section>
  );
};

export default CourseDetail;
