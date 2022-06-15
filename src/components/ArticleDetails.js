const ArticleDetails = ({ currentArticle }) => {
  const { title, author, body, created_at } = currentArticle;
  return (
    <>
      <h3 className="place-holder-card-2 ">{title}</h3>
      <h4 className="place-holder-card-2 ">{author}</h4>
      <p className="place-holder-card-2 ">{created_at}</p>
      <p className="place-holder-card ">{body}</p>
    </>
  );
};

export default ArticleDetails;
