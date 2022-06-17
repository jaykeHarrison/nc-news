import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { signedInUser } = useContext(UserContext);

  return (
    <li
      className={`comment-card ${
        signedInUser === comment.author ? "signed-in-user" : null
      } ${isDeleted ? "comment-card-deleted" : null}`}
    >
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.created_at}</p>
      {signedInUser === comment.author ? (
        <DeleteButton
          comment_id={comment.comment_id}
          isDeleted={isDeleted}
          setIsDeleted={setIsDeleted}
        />
      ) : null}
    </li>
  );
};

export default CommentCard;
