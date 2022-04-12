import React, { useState } from "react";
import styles from "./Header.module.css";
import { list } from "../Header/apiSearch";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icons/search.png";

const Search = ({ handleSearch }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    search: "",
    result: [],
    searched: false,
  });
  const { search, result, searched } = data;
  const handleChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value, searched: false });
  };

  const searchData = () => {
    if (search) {
      list({ search: search || undefined }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, result: response, searched: true });
          handleSearch(response);
        }
      });
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
    window.scrollTo(0, 650);
  };

  const searchForm = () => {
    return (
      <form onSubmit={searchSubmit}>
        <div className={styles.headerSearch}>
          <div className={styles.searchIconPart} onClick={searchSubmit}>
            <img alt="" src={searchIcon}></img>
          </div>
          <input
            type="search"
            className="form-control"
            name="search"
            onChange={handleChange("search")}
            placeholder="Search by name"
          ></input>
        </div>
      </form>
    );
  };

  return (
    <div style={{ height: "55px" }}>
      <div className="container">{searchForm()}</div>
      <div className="container-fluid mb-3"></div>
    </div>
  );
};

export default Search;
