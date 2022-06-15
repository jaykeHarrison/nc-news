import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import AddComment from "./AddComment";

const Article = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleByID(article_id).then((fetchedArticle) => {
      setCurrentArticle(fetchedArticle);
    });
  }, [article_id]);

  return (
    <>
      <ArticleDetails currentArticle={currentArticle} />
      <Votes votes={currentArticle.votes} />
      <CommentsList />
      <AddComment />
    </>
  );
};

export default Article;
