export const createCategoryApi = (userId, token, category) => {
  return fetch(`/category/create/${userId}`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getCategories = () => {
  return fetch("/category", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCourse = (userId, token, course) => {
  console.log("Content course ", course);
  return fetch(`/course/create/${userId}`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(course),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCoursesApi = () => {
  return fetch("/course//list/manage-courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const getCourseApi = (courseId) => {
  return fetch(`/course/${courseId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const deleteCourseApi = (courseId) => {
  return fetch(`/course/delete/${courseId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const getPartsByCourseId = (courseId) => {
  return fetch(`/part/read/${courseId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const updateCourseApi = (courseId, dataSubmit) => {
  return fetch(`/course/update//${courseId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(dataSubmit),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const getLessonsByPartId = (partId) => {
  return fetch(`/lesson/read/${partId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const createPartByCourseId = (courseId, topic) => {
  console.log(courseId, topic);
  return fetch(`/part/create/${courseId}`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({ topic }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
