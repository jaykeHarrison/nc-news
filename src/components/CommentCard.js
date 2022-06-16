import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({ comment }) => {
  const { signedInUser } = useContext(UserContext);

  return (
    <li
      className={`comment-card ${
        signedInUser === comment.author ? "signed-in-user" : null
      }`}
    >
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.created_at}</p>
    </li>
  );
};

export default CommentCard;
