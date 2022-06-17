import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import NotFound from "./NotFound";
import Loading from "./Loading";

const Article = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const [articleExists, setArticleExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleByID(article_id)
      .then((fetchedArticle) => {
        setCurrentArticle(fetchedArticle);
        setIsLoading(false);
      })
      .catch((err) => {
        setArticleExists(false);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }

  return articleExists === true ? (
    <div className="article">
      <ArticleDetails currentArticle={currentArticle} />
      <Votes votes={currentArticle.votes} article_id={article_id} />
      <CommentsList article_id={article_id} />
    </div>
  ) : (
    <NotFound whatNotFound="Article" />
  );
};

export default Article;
