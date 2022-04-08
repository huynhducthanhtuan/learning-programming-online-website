import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Card from "../Home/Card";
import { getCategories, getFilteredCourses } from "../Home/apiCore";
import { prices } from "./fixedPrices";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { list } from "../Header/apiSearch";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const Shop = () => {
  // const query = useQuery();
  // const keySearch = query.get("search");
  const [searchedCourses, setSearchedCourses] = useState([]);
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResult, setFilteredResult] = useState([]);

  const loadFilterResults = (newFilters) => {
    getFilteredCourses(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data.courses);
        setFilteredResult(data.courses);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  useEffect(() => {
    init();
    loadFilterResults(myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    } else {
      newFilters.filters[filterBy] = filters;
    }
    loadFilterResults(myFilters, filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let range = [];

    for (let i in data) {
      if (data[i]._id === parseInt(value)) {
        range = data[i].priceRange;
      }
    }

    return range;
  };

  console.log("filteredResult ", filteredResult);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h4>Filter by categories</h4>
            <ul>
              <Checkbox
                categories={categories}
                handleFilters={(filters) => handleFilters(filters, "category")}
              />
            </ul>
            <h4>Filter by prices</h4>
            <ul style={{ padding: "0" }}>
              <RadioButton
                prices={prices}
                handleFilters={(filters) => handleFilters(filters, "price")}
              />
            </ul>
          </div>

          <div className="col-8 mb-5">
            <div className="row">
              {searchedCourses.map((course, i) => (
                <div className="col-4 mt-4" key={course._id}>
                  <Card course={course} />
                </div>
              ))}

              {filteredResult.map((course, i) => (
                <div className="col-4 mt-4" key={course._id}>
                  <Card course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
