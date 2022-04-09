import React from "react";
import Header from "../Header";
import styles from "./Layout.module.css";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  return (
    <div>
      {/* <Header /> */}
      <div className={`${styles.jumbotron} jumbotron mt-4`}>
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
