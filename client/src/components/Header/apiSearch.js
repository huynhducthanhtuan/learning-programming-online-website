import queryString from "query-string";

export const list = (params) => {
  const query = queryString.stringify(params);

  return fetch(`course/search/courseByName?${query}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
