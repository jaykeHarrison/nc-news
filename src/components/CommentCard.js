const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.created_at}</p>
    </li>
  );
};

export default CommentCard;
