import CommentCard from "./CommentCard";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getCommentsByArticleID } from "../utils/api";
import AddCommentButton from "./AddCommentButton";
import { Link } from "react-router-dom";

const CommentsList = ({ article_id }) => {
  const [commentList, setCommentList] = useState([]);
  const [visibleComments, setVisibleComments] = useState([]);
  const [maxComments, setMaxComments] = useState(false);
  const { signedInUser } = useContext(UserContext);

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
        setCommentList(
          comments.sort((currArticle, nextArticle) => {
            return (
              new Date(nextArticle.created_at) -
              new Date(currArticle.created_at)
            );
          })
        );
      })
      .then(() => {});
  }, [article_id]);

  useEffect(() => {
    setVisibleComments(commentList.slice(0, 3));
  }, [commentList]);

  return (
    <>
      {signedInUser !== "" ? (
        <AddCommentButton
          article_id={article_id}
          setVisibleComments={setVisibleComments}
        />
      ) : (
        <Link to="/">
          <p>Please sign in to post comments</p>
        </Link>
      )}
      <h3>Comments:</h3>
      <ul>
        {visibleComments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
      {!maxComments ? (
        <button className="view-more-comments-button" onClick={handleClick}>
          View More Comments
        </button>
      ) : (
        <p>That's all the comments</p>
      )}
    </>
  );
};

export default CommentsList;
