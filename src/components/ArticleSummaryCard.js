const ArticleSummaryCard = ({ article }) => {
  return (
    <section className="article-card">
      <p className="article-username">{article.username}</p>
      <p className="article-title">{article.title}</p>
      <p className="article-votes">votes: {article.votes}</p>
      <p className="article-comment-count">comments: {article.comment_count}</p>
    </section>
  );
};

export default ArticleSummaryCard;
