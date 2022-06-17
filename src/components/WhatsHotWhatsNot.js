import { useEffect, useState } from "react";
import { getHotAndNotArticles } from "../utils/api";
import ArticleSummaryCard from "./ArticleSummaryCard";

const WhatsHotWhatsNot = () => {
  const [hotArticle, setHotArticle] = useState({});
  const [notHotArticle, setNotHotArticle] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getHotAndNotArticles().then(({ hot, not }) => {
      console.log(hot);
      setHotArticle(hot);
      setNotHotArticle(not);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return <p>fetching</p>;
  }
  return (
    <>
      <h3>What's Hot</h3>
      <ArticleSummaryCard article={hotArticle} />
      <h3>What's Not</h3>
      <ArticleSummaryCard article={notHotArticle} />
    </>
  );
};

export default WhatsHotWhatsNot;
