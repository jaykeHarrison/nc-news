import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://jaykeharrison-nc-news.herokuapp.com/api",
});

export const getAllArticles = (topic) => {
  let path = "/articles";
  if (topic !== undefined) {
    path += `/?topic=${topic}`;
  }
  return ncNewsAPI.get(path).then((response) => {
    return response.data.articles;
  });
};

export const getAllTopics = () => {
  return ncNewsAPI.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getArticleByID = (article_id) => {
  console.log(article_id);
  return ncNewsAPI
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};
