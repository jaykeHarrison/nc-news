import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getCommentsByArticleID } from "../utils/api";
import AddCommentButton from "./AddCommentButton";

const CommentsList = ({ article_id }) => {
  const [commentList, setCommentList] = useState([]);
  const [visibleComments, setVisibleComments] = useState([]);
  const [maxComments, setMaxComments] = useState(false);

  console.log(visibleComments);

  const handleClick = () => {
    if (visibleComments.length < commentList.length) {
      setVisibleComments((currentVisibleComments) => {
        const sliceStart = currentVisibleComments.length;
        const sliceEnd = sliceStart + 3;

        return [
          ...currentVisibleComments,
          ...commentList.slice(sliceStart, sliceEnd),
        ];
      });
    } else {
      setMaxComments(true);
    }
  };

  useEffect(() => {
    getCommentsByArticleID(article_id)
      .then((comments) => {
        setCommentList(comments);
      })
      .then(() => {});
  }, [article_id]);

  useEffect(() => {
    setVisibleComments(commentList.slice(0, 3));
  }, [commentList]);

  return (
    <>
      <h3>Comments:</h3>
      <ul>
        {visibleComments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
      {!maxComments ? (
        <button onClick={handleClick}>View More Comments</button>
      ) : (
        <p>That's all the comments</p>
      )}
      <AddCommentButton
        article_id={article_id}
        setVisibleComments={setVisibleComments}
      />
    </>
  );
};

export default CommentsList;
