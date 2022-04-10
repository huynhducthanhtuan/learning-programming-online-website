import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteCourseApi, getCoursesApi } from "./apiTeacher";

const Card = ({
  course,
  loadCourses,
  setModalOpenEdit,
  setCourseId,
  setModalOpenDelete,
}) => {
  return (
    <div>
      <div className="card mt-4" style={{ width: "18rem", minHeight: "450px" }}>
        <img className="card-img-top" src={course.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          {/* <p className="card-text">{course.description.goal}</p> */}
          {/* <span>{course._id}</span> */}
          <button
            className="btn btn-danger mr-4"
            onClick={() => {
              setModalOpenDelete(true);
              setCourseId(course._id);
            }}
          >
            Delete{" "}
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: "7px 22px" }}
            onClick={() => {
              setModalOpenEdit(true);
              setCourseId(course._id);
            }}
          >
            Edit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
