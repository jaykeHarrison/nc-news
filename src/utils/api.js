import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://jaykeharrison-nc-news.herokuapp.com/api",
});

export const getAllArticles = (topic) => {
  let path = "/articles";
  if (topic !== undefined) {
    path += `/?topic=${topic}`;
  }
  console.log(path);
  return ncNewsAPI.get(path).then((response) => {
    return response.data.articles;
  });
};

export const getAllTopics = () => {
  return ncNewsAPI.get("/topics").then((response) => {
    console.log(response);
    return response.data.topics;
  });
};
