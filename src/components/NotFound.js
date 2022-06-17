import React from "react";

const NotFound = ({ whatNotFound }) => {
  return (
    <>
      <h2 id="404-title">Error 404: {whatNotFound} Not Found</h2>
      <img
        id="404-image"
        src="https://thumbs.gfycat.com/AccurateUnfinishedBergerpicard-size_restricted.gif"
        alt="Confused John Travolta"
      />
    </>
  );
};

export default NotFound;
