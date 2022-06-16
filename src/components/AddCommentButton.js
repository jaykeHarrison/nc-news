import { useState } from "react";
import AddCommentForm from "./AddCommentForm";

const AddCommentButton = ({ article_id, setVisibleComments }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`add-comment-button ${
          isClicked ? "clicked" : "not-clicked"
        }`}
      >
        Add A Comment
      </button>
      {isClicked ? (
        <AddCommentForm
          article_id={article_id}
          setVisibleComments={setVisibleComments}
        />
      ) : null}
    </>
  );
};

export default AddCommentButton;
