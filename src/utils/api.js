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
  return ncNewsAPI
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      throw new Error("no article");
    });
};

export const changeArticleVotes = (article_id, changeInVotes) => {
  const requestBody = {
    inc_votes: changeInVotes,
  };

  return ncNewsAPI
    .patch(`/articles/${article_id}`, requestBody)
    .then((response) => {
      return response.data.updatedArticle.votes;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
