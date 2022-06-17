import { deleteComment } from "../utils/api";

const DeleteButton = ({ comment_id, isDeleted, setIsDeleted }) => {
  const handleClick = () => {
    setIsDeleted(true);
    deleteComment(comment_id).catch((err) => {
      if (err) {
        setIsDeleted(false);
      }
    });
  };
  return (
    <button
      className={`delete-button${isDeleted ? "-toggled" : null}`}
      onClick={isDeleted ? null : handleClick}
      disabled={isDeleted ? true : false}
    >
      {isDeleted ? "DELETED" : "DELETE"}
    </button>
  );
};

export default DeleteButton;
