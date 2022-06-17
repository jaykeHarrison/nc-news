import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://jaykeharrison-nc-news.herokuapp.com/api",
});

export const getAllArticles = (sort_by, order, topic) => {
  let path = `/articles/?sort_by=${sort_by}&order=${order}`;
  if (topic !== undefined) {
    path += `&topic=${topic}`;
  }

  return ncNewsAPI
    .get(path)
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      throw new Error(err.response.status);
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

export const getCommentsByArticleID = (article_id) => {
  return ncNewsAPI.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const getAllUsers = () => {
  return ncNewsAPI.get("/users").then((response) => {
    return response.data.users;
  });
};

export const addCommentToArticleByID = (article_id, username, body) => {
  return ncNewsAPI
    .post(`/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then((response) => {
      return response.data.addedComment;
    });
};

export const deleteComment = (comment_id) => {
  return ncNewsAPI.delete(`/comments/${comment_id}`).catch((err) => {
    if (err) {
      throw new Error("delete failed");
    }
  });
};

export const getHotAndNotArticles = () => {
  return ncNewsAPI
    .get("/articles/?sort_by=votes&order=DESC")
    .then(({ data: { articles } }) => {
      return { hot: articles[0], not: articles[articles.length - 1] };
    });
};
