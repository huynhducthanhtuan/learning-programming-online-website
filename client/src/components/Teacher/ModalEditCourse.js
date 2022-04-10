import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { initialState } from "../../reducers";
import {
  getCourseApi,
  getPartsByCourseId,
  updateCourseApi,
  getLessonsByPartId,
  createPartByCourseId,
} from "./apiTeacher";
import { getCategories } from "./apiTeacher";
import Axios from "axios";
import styles from "./Teacher.module.css";
import { toast } from "react-toastify";

const ModalEditCourse = ({ setModalOpenEdit, courseId, loadCourses }) => {
  const [values, setValues] = useState({
    name: "",
    //   description:"",
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
  const { name, price, category, pic } = values;

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
  const loadLessonsByPartId = (partId) => {
    getLessonsByPartId(partId).then((lessons) => {
      setLessons(lessons);
    });
  };
  const addPartByCourseId = async (courseId, topic) => {
    const data = await createPartByCourseId(courseId, topic);
    console.log(data);
    loadPartsByCourseId();
  };
  console.log(topic);
  const renderParts = () => {
    return (
      <div className="mb-4">
        <div className="d-flex mt-4 mb-4">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Add a part"
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            onClick={() => addPartByCourseId(course._id, topic)}
          >
            Add Part
          </button>
        </div>
        {parts.map((part) => {
          return (
            <ul className="list-group" key={part._id}>
              <li
                className={
                  part.isSelect
                    ? `list-group-item ${styles.partItem} list-group-item-info`
                    : `list-group-item ${styles.partItem}`
                }
                onClick={() => {
                  loadLessonsByPartId(part._id);
                  part.isSelect = !part.isSelect;
                }}
              >
                {part.topic}
              </li>
              {part.isSelect &&
                lessons.map((lesson) => {
                  return (
                    <span
                      className={`list-group-item ${styles.lessonItem}`}
                      onClick={() => loadLessonsByPartId(lesson._id)}
                    >
                      {lesson.title}
                    </span>
                  );
                })}
            </ul>
          );
        })}
      </div>
    );
  };

  const clickUpdate = async (event) => {
    event.preventDefault();
    const dataSubmit = {
      name: name ? name : course && course.name,
      price: price ? price : course && course.price,
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
              defaultValue={course && course.description.goal}
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
      <div className="modalContainer">
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
          <h1>Edit Course</h1>
        </div>
        {course && courseDetail()}
        {parts && renderParts()}
      </div>
    </div>
  );
};
export default ModalEditCourse;
