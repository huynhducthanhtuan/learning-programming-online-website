import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCoursesApi } from "./apiTeacher";
import HeaderTeacher from "../HeaderTeacher";
import Card from "./Card";
import Layout from "../Layout";
import ModalEditCourse from "./ModalEditCourse";

const ManageCourse = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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
      {modalOpen && <ModalEditCourse setOpenModal={setModalOpen} />}
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
                    setModalOpen={setModalOpen}
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
