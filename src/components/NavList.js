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
    <ul className={`nav-list ${isOpen === true ? "open" : "closed"}`}>
      <Link key="home" to={"/"}>
        <p>Home</p>
      </Link>
      <Link key="articles" to={"/articles"}>
        <p>Articles</p>
      </Link>
      <p>topics:</p>
      <ul>
        {topicList.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </ul>
  );
};

export default NavList;
