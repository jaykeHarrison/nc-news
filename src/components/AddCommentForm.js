import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { addCommentToArticleByID } from "../utils/api";

const AddCommentForm = ({ article_id, setVisibleComments }) => {
  const [commentText, setCommentText] = useState("");
  const { signedInUser } = useContext(UserContext);

  const handleInput = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (signedInUser === "") return;
    addCommentToArticleByID(article_id, signedInUser, commentText).then(
      (addedComment) => {
        setVisibleComments((currVisibleComments) => {
          return [addedComment, ...currVisibleComments];
        });
        setCommentText("");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="comment-field">Write Comment</label>
      <textarea
        type="input"
        id="comment-field"
        onChange={handleInput}
        value={commentText}
      ></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddCommentForm;
