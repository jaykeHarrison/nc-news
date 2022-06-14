import ArticleSummaryCard from "./ArticleSummaryCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  const [articleList, setArticleList] = useState([]);
  const [visibileArticles, setVisibleArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loadMoreArticles, setLoadMoreArticles] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const { topic } = useParams();

  const updateVisibleArticles = () => {
    setVisibleArticles((currentVisibleList) => {
      const indexToAddFrom = pageNumber * 3;

      return [
        ...currentVisibleList,
        ...articleList.slice(indexToAddFrom, indexToAddFrom + 3),
      ];
    });
    setPageNumber((currentPageNum) => currentPageNum + 1);
    setLoadMoreArticles(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (visibileArticles.length <= articleList.length) {
      setLoadMoreArticles(true);
    }
  };

  useEffect(() => {
    if (currentTopic !== topic) {
      getAllArticles(topic)
        .then((articles) => {
          setArticleList(() => {
            return articles;
          });
        })
        .then(() => {
          setLoadMoreArticles(true);
        });
      setCurrentTopic(topic);
      setVisibleArticles([]);
      setPageNumber(0);
    }
  }, [topic]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (!loadMoreArticles) return;
    updateVisibleArticles();
  }, [loadMoreArticles]);

  return (
    <>
      {topic !== undefined ? (
        <h2 className="sub-header">{`Showing ${topic.toUpperCase()} articles`}</h2>
      ) : (
        ""
      )}
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
