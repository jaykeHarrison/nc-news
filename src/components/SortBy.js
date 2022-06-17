import ArticlesList from "./ArticlesList";
import { useState } from "react";

const SortBy = () => {
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  const handleSelect = (event) => {
    setSort(event.target.value);
  };

  const handleClick = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <div className="sort-container">
        <label htmlFor="sortBy">Sort by: </label>
        <select name="sortBy" value={sort} onChange={handleSelect}>
          <option value="created_at">date</option>
          <option value="votes">votes</option>
          <option value="comment_count">comments</option>
        </select>
        <button
          value="ASC"
          onClick={handleClick}
          className={`order-button ${order === "ASC" ? "selected" : null}`}
        >
          Ascending
        </button>
        <button
          value="DESC"
          onClick={handleClick}
          className={`order-button ${order === "DESC" ? "selected" : null}`}
        >
          Descending
        </button>
      </div>
      <ArticlesList sort={sort} order={order} />
    </>
  );
};

export default SortBy;
