import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CreateCourse.module.css";

const CreateCourse = () => {
  const formCreateCourse = () => {
    return (
      <form className="mt-4">
        <h3>New Course</h3>
        <div className="form-group">
          <span span className="text-muted">
            {" "}
            Name{" "}
          </span>
          <input className="form-control"></input>
        </div>
        <div className="form-group">
          <span span className="text-muted">
            {" "}
            Description{" "}
          </span>
          <input className="form-control"></input>
        </div>
        <div className="form-group">
          <span span className="text-muted">
            {" "}
            Category{" "}
          </span>
          <select>
            <option value={"object Id"}></option>
          </select>
        </div>
        <div className="form-group">
          <span span className="text-muted">
            {" "}
            Price{" "}
          </span>
          <input className="form-control"></input>
        </div>
      </form>
    );
  };

  return (
    <div>
      hello
      {/* {formCreateCourse()} */}
    </div>
  );
};

export default CreateCourse;
