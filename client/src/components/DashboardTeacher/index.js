import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth";
import HeaderTeacher from "../HeaderTeacher";

const DashboardTeacher = () => {
  const { token, user } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Teacher Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/course">
              Create Course
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminManage = () => {
    return (
      <div className="card mt-4 mb-4">
        <h4 className="card-header"> Course</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/manage/courses">
              Courses
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Teacher information</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">
            Role: {user.role === 1 ? "Teacher" : "User"}
          </li>
        </ul>
      </div>
    );
  };

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
              {adminLinks()}
              {adminManage()}
            </div>
            <div className="col-9">{adminInfo()}</div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default DashboardTeacher;
