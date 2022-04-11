import React from "react";
import { deleteCourseApi } from "../Teacher/apiTeacher";
import { toast } from "react-toastify";
import "./Modal.css";

function Modal({
  setModalOpenDelete,
  setOpenModal,
  title,
  body = "Body",
  action,
  courseId,
  loadCourses,
}) {
  const deleteCourse = async (id) => {
    await deleteCourseApi(id).then((data) => {
      if (data.error) {
        toast.error("DELETE COURSE SUCCESS");
      } else {
        toast.success("DELETE COURSE SUCCESS");
      }
    });
    setModalOpenDelete && setModalOpenDelete(false);
    loadCourses();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal && setOpenModal(false);
              setModalOpenDelete && setModalOpenDelete(false);
            }}
          >
            X
          </button>
        </div>
        {title && (
          <div className="title">
            <h1> {title}</h1>
          </div>
        )}
        <div className="body">
          <p>{body}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              action && action();
              deleteCourse && deleteCourse(courseId);
            }}
          >
            Oke
          </button>
          <button
            onClick={() => {
              setOpenModal && setOpenModal(false);
              setModalOpenDelete && setModalOpenDelete(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
