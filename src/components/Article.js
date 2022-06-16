import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import AddComment from "./AddComment";

const Article = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const [articleExists, setArticleExists] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleByID(article_id)
      .then((fetchedArticle) => {
        setCurrentArticle(fetchedArticle);
      })
      .catch((err) => {
        setArticleExists(false);
      });
  }, [article_id]);

  return articleExists === true ? (
    <>
      <ArticleDetails currentArticle={currentArticle} />
      <Votes votes={currentArticle.votes} article_id={article_id} />
      <CommentsList />
      <AddComment />
    </>
  ) : (
    <h2>Error 404: Article Not Found</h2>
  );
};

export default Article;
