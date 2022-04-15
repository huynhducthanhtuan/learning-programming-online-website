import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../Layout";
import { getCoursesApi } from "./apiTeacher";
import Card from "./Card";
import ModalEditCourse from "./ModalEditCourse";
import Modal from "../model/Modal";
import HeaderTeacher from "../HeaderTeacher";

const ManageCourse = () => {
  const [data, setData] = useState([]);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [courseId, setCourseId] = useState("");
  // const courseId = useRef("");
  const loadCourses = () => {
    getCoursesApi().then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="mt-4">
      <HeaderTeacher />
      {modalOpenEdit && (
        <ModalEditCourse
          setModalOpenEdit={setModalOpenEdit}
          courseId={courseId}
          loadCourses={loadCourses}
        />
      )}
      {modalOpenDelete && (
        <Modal
          body="Bạn có muốn xóa khóa học này?"
          setModalOpenDelete={setModalOpenDelete}
          courseId={courseId}
          loadCourses={loadCourses}
        />
      )}
      <Layout
        title="DashBoard"
        description="Manage Courses"
        className="container-fluid"
      ></Layout>
      <div className="container-fluid">
        <div className="row">
          {data &&
            data.map((course) => {
              return (
                <div className="col-3" key={course._id}>
                  <Card
                    course={course}
                    loadCourses={loadCourses}
                    setModalOpenEdit={setModalOpenEdit}
                    setModalOpenDelete={setModalOpenDelete}
                    setCourseId={setCourseId}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ManageCourse;
