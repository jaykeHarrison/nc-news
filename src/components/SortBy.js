import ArticlesList from "./ArticlesList";
import { useState } from "react";

const SortBy = () => {
  const [sort, setSort] = useState("date");
  const [isAscending, setIsAscending] = useState(false);

  const handleSelect = (event) => {
    setSort((currentSort) => {
      return event.target.value;
    });
  };

  return (
    <>
      <div className="sort-container">
        <label for="sortBy">Sort by: </label>
        <select name="sortBy" value={sort} onChange={handleSelect}>
          <option value="date">date</option>
          <option value="author">author</option>
        </select>
      </div>
      <ArticlesList sort={sort} isAscending={isAscending} />
    </>
  );
};

export default SortBy;
