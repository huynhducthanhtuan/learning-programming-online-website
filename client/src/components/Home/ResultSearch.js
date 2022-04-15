import React, { useState } from "react";
import Search from "../Header/Search";
import { list } from "../Header/apiSearch";
import Card from "../Home/Card";

const ResultSearch = ({ resultSearch }) => {
  const searchMessage = (resultSearch) => {
    if (resultSearch.length > 0) {
      return `Search results`;
    }
    if (resultSearch.length <= 0) {
      return "No course found";
    }
  };
  const searchedProducts = (resultSearch = []) => {
    return (
      <div>
        <h2 className="mt-4 bm-4">{searchMessage(resultSearch)}</h2>
        <div className="row">
          {resultSearch &&
            resultSearch.map((p, i) => (
              <div key={i} className="col-4 mb-3">
                <Card key={i} course={p} />
              </div>
            ))}
        </div>
      </div>
    );
  };

  return <div>{searchedProducts(resultSearch)}</div>;
};

export default ResultSearch;
