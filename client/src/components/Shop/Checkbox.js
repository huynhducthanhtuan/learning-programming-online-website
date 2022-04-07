import React, { useEffect, useState } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);
  //console.log(checked);
  const handleToggle = (id) => () => {
    let tmp = [];
    const isChecked = checked.includes(id);
    if (isChecked) {
      tmp = checked.filter((item) => item !== id);
    } else {
      tmp = [...checked, id];
    }
    setChecked(tmp);
    handleFilters(tmp);
  };

  return categories.map((c, i) => {
    return (
      <li key={i} className="list-unstyled">
        <input
          onChange={handleToggle(c._id)}
          type="checkbox"
          className="form-check-input"
        />
        <label className="form-check-label">{c.name}</label>
      </li>
    );
  });
};

export default Checkbox;
