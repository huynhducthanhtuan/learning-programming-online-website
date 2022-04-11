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
      <div
        className="card mt-4 mb-4"
        style={{ width: "18rem", minHeight: "450px" }}
      >
        <img
          className="card-img-top"
          src={course.image}
          style={{ height: "180px", objectFit: "cover" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{course.description}</p>
          <h6 className="card-subtitle mb-2 text-muted mt-4 mb-4">
            Price {course.price}
          </h6>
          {/* <span>{course._id}</span> */}
          <button
            className="btn btn-outline-secondary mr-4 btn-sm"
            onClick={() => {
              setModalOpenDelete(true);
              setCourseId(course._id);
            }}
          >
            Delete{" "}
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            style={{ width: "62px" }}
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
