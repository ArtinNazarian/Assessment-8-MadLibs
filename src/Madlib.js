import React, { useState } from "react";
import UserForm from "./UserForm";
import Story from "./Story";
import { v4 as uuid } from "uuid/dist";

const Madlib = () => {
  const [story, setStory] = useState([]);
  const [showStory, setShowStory] = useState(false);

  const makeStory = (newStory) => {
    setStory((story) => [...story], { ...newStory, id: uuid() });
  };

  return (
    <div className="Madlib">
      <h1>Madlibs</h1>
      {showStory ? (
        <Story story={story[0]} />
      ) : (
        <UserForm setShowStory={setShowStory} makeStory={makeStory} />
      )}
    </div>
  );
};

export default Madlib;
