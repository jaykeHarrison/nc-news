import ArticleSummaryCard from "./ArticleSummaryCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  const [articleList, setArticleList] = useState([]);
  const [visibileArticles, setVisibleArticles] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [allPageNumbers, setAllPageNumbers] = useState([]);
  const [loadMoreArticles, setLoadMoreArticles] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const { topic } = useParams();

  const handlePageChange = (event) => {
    event.preventDefault();
    setCurrentPageNumber(event.target.innerText);
    setLoadMoreArticles(true);
  };

  useEffect(() => {
    if (currentTopic !== topic) {
      setCurrentTopic(topic);
      setVisibleArticles([]);
      setCurrentPageNumber(1);
      getAllArticles(topic)
        .then((articles) => {
          setArticleList(() => {
            return articles;
          });
          setAllPageNumbers(() => {
            const totalPages = Math.ceil(articles.length / 10);

            return [...Array(totalPages).keys()].map((index) => index + 1);
          });
        })
        .then(() => {
          setLoadMoreArticles(true);
        });
    }
  }, [topic]);

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

  return (
    <>
      {topic !== undefined ? (
        <h2 className="sub-header">{`Showing ${topic.toUpperCase()} articles`}</h2>
      ) : (
        ""
      )}
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
            <ArticleSummaryCard key={article.article_id} article={article} />
          );
        })}
      </ul>
    </>
  );
};

export default ArticlesList;
