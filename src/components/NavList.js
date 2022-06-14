import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";
import { Link } from "react-router-dom";

const NavList = ({ isOpen }) => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopicList(topics);
    });
  }, [isOpen]);

  return (
    <div className={`nav-list ${isOpen === true ? "open" : "closed"}`}>
      <p>topics:</p>
      <ul>
        <Link key="home" to={"/"}>
          Home
        </Link>
        {topicList.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
