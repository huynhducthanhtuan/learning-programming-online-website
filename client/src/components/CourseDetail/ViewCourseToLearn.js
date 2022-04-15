import React from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "./index";

const ViewCourseToLearn = () => {
  const lessonId = useParams();

  console.log(lessonId);
  return <CourseDetail />;
};
export default ViewCourseToLearn;
