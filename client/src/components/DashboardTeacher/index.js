import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth";
import { viewProfileApi } from "../Profile/apiProfile";
import HeaderTeacher from "../HeaderTeacher";

const DashboardTeacher = () => {
  const [teacherInfos, setTeacherInfos] = useState({
    name: "",
    email: "",
  });

  const teacherLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Teacher Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create-category">
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create-course">
              Create Course
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const teacherManage = () => {
    return (
      <div className="card mt-4 mb-4">
        <h4 className="card-header">Teacher Manager</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/manage-courses">
              Manage Courses
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const getTeacherInfos = async () => {
    try {
      // Lấy userId từ localStorage
      const userId = isAuthenticated() ? isAuthenticated().user._id : "";

      // Call API
      const data = await viewProfileApi({ _id: userId });

      // Xử lí kết quả trả về từ API
      if (data._id) {
        setTeacherInfos({ name: data.name, email: data.email });
      } else {
        setTeacherInfos({ name: "", email: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const teacherInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Teacher information</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {teacherInfos.name}</li>
          <li className="list-group-item">Email: {teacherInfos.email}</li>
          <li className="list-group-item">Role: Teacher</li>
        </ul>
      </div>
    );
  };

  useEffect(async () => {
    await getTeacherInfos();
  }, [teacherInfos]);

  return (
    <>
      <HeaderTeacher />
      <div className="mt-4">
        <Layout
          title="DashBoard"
          description="Teacher Dashboard"
          className="container-fluid"
        >
          <div className="row">
            <div className="col-3">
              {teacherLinks()}
              {teacherManage()}
            </div>
            <div className="col-9">{teacherInfo()}</div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default DashboardTeacher;
