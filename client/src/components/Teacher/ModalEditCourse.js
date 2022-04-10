import React from "react";
import { useState } from "react";
import "./ModalEditCourse.css";

const ModalEditCourse = ({ setOpenModal }) => {
  const [values, setValues] = useState({
    name: "",
    price: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="form-group">
          <span className="text-muted">Name</span>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <span className="text-muted">Description</span>
          <textarea
            onChange={handleChange("description")}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <span className="text-muted">Price</span>
          <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};
export default ModalEditCourse;
