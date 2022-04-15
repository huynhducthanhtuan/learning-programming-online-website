import React from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import {
  getCourseApi,
  getPartsByCourseId,
  updateCourseApi,
  getLessonsByPartId,
  createPartByCourseId,
  createLessonByPartId,
} from "./apiTeacher";
import { getCategories } from "./apiTeacher";
import Axios from "axios";
import styles from "./Teacher.module.css";
import { toast } from "react-toastify";
import ToggleCourse from "../ToggleCourse";

const kvArray = new Map();

const ModalEditCourse = ({ setModalOpenEdit, courseId, loadCourses }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    pic: "",
    category: "",
  });
  const [course, setCourse] = useState();
  const [categories, setCategories] = useState();
  const [topic, setTopic] = useState();
  const [parts, setParts] = useState();
  const [lessons, setLessons] = useState();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const { name, price, category, pic, description } = values;
  const topicRef = useRef();
  const titleRef = useRef();
  const videoIdRef = useRef();
  const [openLessons, setOpenLessons] = useState(false);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const loadCategories = () => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  };
  const loadCourse = () => {
    getCourseApi(courseId).then((course) => {
      setCourse(course);
    });
  };
  const loadPartsByCourseId = () => {
    getPartsByCourseId(courseId).then((parts) => {
      setParts(parts);
    });
  };
  const postImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ecommerce");
    data.append("cloud_name", "dhzbsq7fj");
    await Axios.post(
      "https://api.cloudinary.com/v1_1/dhzbsq7fj/image/upload",
      data
    ).then((res) => setUrl(res.data.url));
  };
  //
  useEffect(() => {
    if (image) {
      postImage();
    }
  }, [image]);
  useEffect(() => {
    loadCategories();
    loadCourse();
    loadPartsByCourseId();
  }, []);
  const loadLessonsByPartId = async (partId, part) => {
    await getLessonsByPartId(partId).then((lessons) => {
      // kvArray.set(partId, lessons);
      setLessons(lessons);
      // setOpenLessons(part.isSelect);
    });
  };

  const addPartByCourseId = async (courseId, topic) => {
    const data = await createPartByCourseId(courseId, topic);

    loadCourse();
    topicRef.current.value = "";
  };
  const addLessonByPartId = async (partId, title, videoId) => {
    const data = await createLessonByPartId(partId, title, videoId);
    // titleRef.current.value = "";
    // videoIdRef.current.value = "";
    loadCourse();
  };

  const showLessons = (part) => {
    // console.log(part._id);
    // console.log(kvArray.get(part._id));
    // console.log(part.isSelect);
    return (
      <div>
        {lessons.map((lesson, index) => {
          return (
            <p
              className={`list-group-item ${styles.lessonItem} h6`}
              onClick={() => loadLessonsByPartId(lesson._id)}
              key={lesson._id}
            >
              <small>
                {index + 1}. {lesson.title}
              </small>
            </p>
          );
        })}
      </div>
    );
  };
  const showFormAddLesson = (part) => {
    console.log(part.isSelect);

    return (
      <div>
        {
          <div>
            <div className="d-flex mt-4 ">
              <div className="form-group">
                <span className="text-muted">Title</span>
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Title "
                  ref={titleRef}
                />
              </div>

              <div className="form-group ml-4">
                <span className="text-muted">VideoId</span>
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Video Id"
                  ref={videoIdRef}
                />
              </div>
            </div>

            <button
              className="btn btn-outline-success mb-4"
              onClick={() => {
                addLessonByPartId(
                  part._id,
                  titleRef.current.value,
                  videoIdRef.current.value
                );
              }}
            >
              Add Lesson
            </button>
          </div>
        }
      </div>
    );
  };
  const addLessonBtn = (part) => {
    // console.log(part.isSelect);
    return (
      <>
        <div
          className="mt-4 mb-4"
          style={{
            padding: "2px",
            border: "2px dotted #ccc",
            display: part.isSelect ? "none" : "block",
          }}
        >
          <p
            className={`text-center m-0 ${styles.addLessonBtnC}`}
            style={{
              padding: "2px",
              // display: part.isSelect ? "none" : "block",
            }}
            onClick={() => {
              part.isSelect = !part.isSelect;
              console.log(part.isSelect);
              setOpenLessons(!openLessons);
            }}
          >
            Add lesson
          </p>
        </div>
        <div>
          {part.isSelect && (
            <div>
              <div className="d-flex mt-4 ">
                <div className="form-group">
                  <span className="text-muted">Title</span>
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Title "
                    ref={titleRef}
                  />
                </div>

                <div className="form-group ml-4">
                  <span className="text-muted">VideoId</span>
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Video Id"
                    ref={videoIdRef}
                  />
                </div>
              </div>

              <button
                className="btn btn-outline-success mb-4"
                onClick={() => {
                  addLessonByPartId(
                    part._id,
                    titleRef.current.value,
                    videoIdRef.current.value
                  );
                  part.isSelect = !part.isSelect;
                  console.log(part.isSelect);
                  setOpenLessons(!openLessons);
                }}
              >
                Add Lesson
              </button>
            </div>
          )}
        </div>
      </>
    );
  };
  const renderParts = () => {
    return (
      <div className="mb-4">
        <div className="d-flex mt-4 mb-4">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Add a part"
            ref={topicRef}
          />
          <button
            className="btn btn-outline-success"
            onClick={() =>
              addPartByCourseId(course._id, topicRef.current.value)
            }
          >
            Add Part
          </button>
        </div>
        {course && <ToggleCourse course={course} addLessonBtn={addLessonBtn} />}
      </div>
    );
  };

  const clickUpdate = async (event) => {
    event.preventDefault();
    const dataSubmit = {
      name: name ? name : course && course.name,
      price: price ? price : course && course.price,
      description: description ? description : course && course.description,
      pic: url ? url : course && course.image,
      category: category ? category : course && course.category._id,
    };
    await updateCourseApi(courseId, dataSubmit).then((result) => {
      toast.success(result.toUpperCase());
    });
    loadCourses();
    setModalOpenEdit(false);
  };
  const courseDetail = () => {
    return (
      <div>
        <form onSubmit={clickUpdate}>
          <div className="form-group">
            <label className="btn btn-secondary">
              <input
                type="file"
                name="photo"
                onChange={(event) => setImage(event.target.files[0])}
              />
            </label>
          </div>
          <div className="form-group">
            <span className="text-muted">Name</span>
            <input
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              value={name ? name : course && course.name}
            />
          </div>

          <div className="form-group">
            <span className="text-muted">Description</span>
            <textarea
              onChange={handleChange("description")}
              className="form-control"
              defaultValue={
                description ? description : course && course.description
              }
            ></textarea>
          </div>
          <div className="form-group">
            <span className="text-muted">Price</span>
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              value={price ? price : course && course.price}
            />
          </div>
          <div className="form-group">
            <span className="text-muted">Category</span>
            <select
              className="form-control"
              onChange={handleChange("category")}
            >
              <option value={course && course.category._id}>
                {course && course.category.name}
              </option>
              {categories &&
                categories.map((c, i) => {
                  return (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <button className="btn btn-outline-primary mb-4">
            Update Course
          </button>
        </form>
      </div>
    );
  };
  return (
    <div className="modalBackground">
      <div
        className="modalContainer"
        style={{ height: "98vh", overflow: "auto" }}
      >
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpenEdit(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="mb-4">Edit Course</h1>
        </div>
        {course && courseDetail()}
        {parts && renderParts()}
      </div>
    </div>
  );
};
export default ModalEditCourse;
