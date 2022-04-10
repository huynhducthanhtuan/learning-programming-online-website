import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../Layout";
import { getCoursesApi } from "./apiTeacher";
import Card from "./Card";
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
  console.log(data);
  return (
    <div className="mt-4">
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
