import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ makeStory }) => {
  const initialState = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeStory({ ...formData });
    //setShowStory(true);
    //setFormData(initialState);
  };

  return (
    <div className="UserForm">
      <form onSubmit={handleSubmit}>
        <input
          id="noun"
          type="text"
          name="noun"
          placeholder="noun"
          value={formData.noun}
          onChange={handleChange}
        />
        <input
          id="noun2"
          type="text"
          name="noun2"
          placeholder="noun2"
          value={formData.noun2}
          onChange={handleChange}
        />
        <input
          is="adjective"
          type="text"
          name="adjective"
          placeholder="adjective"
          value={formData.adjective}
          onChange={handleChange}
        />
        <input
          id="color"
          type="text"
          name="color"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        />

        <button className="button">Get Story</button>
      </form>
    </div>
  );
};

export default UserForm;
