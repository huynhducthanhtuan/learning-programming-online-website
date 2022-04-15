import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "..";
import { getUserHasCourses } from "./apiMyCourses";
import { isAuthenticated } from "../Auth";
import { toast } from "react-toastify";
import Carted from "../Carted";

const MyCourses = ({}) => {
  const { token, user } = isAuthenticated([]);
  const [userHasCourses, setUserHasCourses] = useState();

  useEffect(() => {
    getUserHasCourses(user._id, token).then((user) => {
      if (user.error) {
        toast.error(user.error);
      } else {
        setUserHasCourses(user);
      }
      console.log(user);
    });
  }, []);

  return (
    <div>
      <Header role={0} />
      <div className="container-fluid">
        {userHasCourses &&
          userHasCourses.coursesId.map((course, i) => {
            return <Carted course={course} />;
          })}
      </div>
    </div>
  );
};

export default MyCourses;
