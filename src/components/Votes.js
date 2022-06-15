import { useState, useEffect } from "react";
import { changeArticleVotes } from "../utils/api";

const Votes = ({ article_id, votes }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [toggleUpVote, setToggleUpVote] = useState(false);
  const [toggleDownVote, setToggleDownVote] = useState(false);

  const handleUpVote = () => {
    let increment = 0;
    if (!toggleUpVote && !toggleDownVote) {
      increment = 1;
      setToggleUpVote(true);
    } else if (!toggleUpVote && toggleDownVote) {
      increment = 2;
      setToggleUpVote(true);
      setToggleDownVote(false);
    } else {
      increment = -1;
      setToggleUpVote(false);
    }

    changeArticleVotes(article_id, increment).catch((err) => {
      if (err) {
        setToggleUpVote(false);
        setToggleDownVote(false);
        setCurrentVotes(votes);
      }
    });

    setCurrentVotes((currentVotes) => {
      return currentVotes + increment;
    });
  };

  const handleDownVote = () => {
    let increment = 0;
    if (!toggleUpVote && !toggleDownVote) {
      increment = -1;
      setToggleDownVote(true);
    } else if (toggleUpVote && !toggleDownVote) {
      increment = -2;
      setToggleDownVote(true);
      setToggleUpVote(false);
    } else {
      increment = 1;
      setToggleDownVote(false);
    }

    changeArticleVotes(article_id, increment).catch((err) => {
      if (err) {
        setToggleUpVote(false);
        setToggleDownVote(false);
        setCurrentVotes(votes);
      }
    });

    setCurrentVotes((currentVotes) => {
      return currentVotes + increment;
    });
  };

  useEffect(() => {
    setCurrentVotes(votes);
  }, [votes]);

  return (
    <>
      <button
        type="button"
        onClick={handleUpVote}
        className={`vote-button ${toggleUpVote ? "toggled" : null}`}
      >
        UpVote
      </button>
      <p className="place-holder-card-2">Total Votes:{currentVotes}</p>
      <button
        type="button"
        onClick={handleDownVote}
        className={`vote-button ${toggleDownVote ? "toggled" : null}`}
      >
        DownVote
      </button>
    </>
  );
};

export default Votes;
