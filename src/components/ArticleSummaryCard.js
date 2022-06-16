import { Link } from "react-router-dom";
import Votes from "./Votes";

const ArticleSummaryCard = ({ article }) => {
  return (
    <section className="article-card">
      <p className="article-username">{article.username}</p>
      <p className="article-title">{article.title}</p>
      <Votes article_id={article.article_id} votes={article.votes} />
      <p className="article-comment-count">comments: {article.comment_count}</p>
      <Link to={`/articles/article/${article.article_id}`}>
        <button>View Article</button>
      </Link>
    </section>
  );
};

export default ArticleSummaryCard;
