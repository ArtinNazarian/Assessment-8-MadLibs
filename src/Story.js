import React from "react";

const Story = ({ setShowStory, setStory, story }) => {
  const restar = () => {
    setShowStory(false);
    setStory([]);
  };
  return (
    <div className="Story">
      <p>
        There was a {story.color} {story.noun} who loved a {story.adjective}{" "}
        {story.noun2}
      </p>
      <button onClick={restar}>Restart</button>
    </div>
  );
};

export default Story;
