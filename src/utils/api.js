import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://jaykeharrison-nc-news.herokuapp.com/api",
});

export const getAllArticles = () => {
  return ncNewsAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
};
