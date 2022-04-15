import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth";
import { createCategoryApi } from "./apiTeacher";
import HeaderTeacher from "../HeaderTeacher";

const AddCategory = () => {
  const { token, user } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
  });
  const { name, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    createCategoryApi(user._id, token, { name }).then((result) => {
      console.log(result);
      if (result.error) {
        setValues({ ...values, error: result.error, success: false });
      } else setValues({ ...values, success: true, error: false });
    });
  };

  const newCategory = () => {
    return (
      <form>
        <div className="form-group">
          <span className="text-muted">Name</span>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={handleChange("name")}
            autoFocus
            required
          />
        </div>
        <button className="btn btn-outline-primary mb-4" onClick={submitForm}>
          Create Category
        </button>
      </form>
    );
  };

  const successShow = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        Create Category success!
      </div>
    );
  };

  const errorShow = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <HeaderTeacher />
      <Layout
        title="Add a new Category"
        description={`${user.name} Ready to add a new Category`}
      >
        <div className="container col-md-3 ">
          {newCategory()}
          {successShow()}
          {errorShow()}
          <Link to="/" className="text-warning">
            Go dashboard
          </Link>
        </div>
      </Layout>
    </>
  );
};
export default AddCategory;
