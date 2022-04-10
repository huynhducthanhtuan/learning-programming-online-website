import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteCourseApi, getCoursesApi } from "./apiTeacher";

const Card = ({ course, loadCourses, setModalOpen }) => {
  const deleteCourse = async (id) => {
    await deleteCourseApi(id).then((data) => {
      if (data) {
        toast.success("DELETE COURSE SUCCESS");
      } else {
        toast.error("DELETE COURSE SUCCESS");
      }
    });
    loadCourses();
  };
  return (
    <div>
      <div className="card mt-4" style={{ width: "18rem", minHeight: "450px" }}>
        <img className="card-img-top" src={course.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          {/* <p className="card-text">{course.description.goal}</p> */}
          <span>{course._id}</span>
          <button
            className="btn btn-danger mr-4"
            onClick={() => deleteCourse(course._id)}
          >
            Delete{" "}
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: "7px 22px" }}
            onClick={() => setModalOpen(true)}
          >
            Edit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
