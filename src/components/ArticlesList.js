import ArticleSummaryCard from "./ArticleSummaryCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import PageNotFound from "./NotFound";

const ArticlesList = ({ sort, order }) => {
  const [articleList, setArticleList] = useState([]);
  const [visibileArticles, setVisibleArticles] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [allPageNumbers, setAllPageNumbers] = useState([]);
  const [loadMoreArticles, setLoadMoreArticles] = useState(false);
  const [articlesNotFound, setArticlesNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("");
  const { topic } = useParams();

  const handlePageChange = (event) => {
    event.preventDefault();
    setCurrentPageNumber(event.target.innerText);
    setLoadMoreArticles(true);
  };

  useEffect(() => {
    setCurrentTopic(topic);
    setVisibleArticles([]);
    setCurrentPageNumber(1);
    getAllArticles(sort, order, topic)
      .then((articles) => {
        setArticleList(() => {
          return articles;
        });
        setAllPageNumbers(() => {
          const totalPages = Math.ceil(articles.length / 10);

          return [...Array(totalPages).keys()].map((index) => index + 1);
        });
        setIsLoading(false);
      })
      .then(() => {
        setLoadMoreArticles(true);
      })
      .catch((err) => {
        if (err) {
          setIsLoading(false);
          setArticlesNotFound(true);
        }
      });
  }, [topic, sort, order]);

  useEffect(() => {
    const updateVisibleArticles = () => {
      setVisibleArticles(() => {
        const indexToAddFrom = (currentPageNumber - 1) * 10;
        const indexToAddTo = indexToAddFrom + 10;

        return articleList.slice(indexToAddFrom, indexToAddTo);
      });
      setLoadMoreArticles(false);
    };

    if (loadMoreArticles) {
      updateVisibleArticles();
    }
  }, [loadMoreArticles]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {topic !== undefined && articlesNotFound === false ? (
        <h2 className="sub-header">{`Showing ${topic.toUpperCase()} articles`}</h2>
      ) : null}
      {articlesNotFound === true ? (
        <PageNotFound whatNotFound="Topic" />
      ) : (
        <>
          <ul className="page-numbers">
            {allPageNumbers.map((pageNumber) => {
              return (
                <button key={pageNumber} onClick={handlePageChange}>
                  {pageNumber}
                </button>
              );
            })}
          </ul>
          <ul className="article-list">
            {visibileArticles.map((article) => {
              return (
                <ArticleSummaryCard
                  key={article.article_id}
                  article={article}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default ArticlesList;
