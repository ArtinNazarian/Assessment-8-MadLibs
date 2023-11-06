import React from "react";

const Story = ({ story }) => {
  return (
    <div className="Story">
      <p>
        There was a {story.color} {story.noun} who loved a {story.adjective}{" "}
        {story.noun2}
      </p>
    </div>
  );
};

export default Story;
