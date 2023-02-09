import React, { useState, useEffect } from "react";

const RoomTags = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    let tags = inputValue.split(",").map((tag) => tag.replace(/\s/g, ""));
    setTags(tags);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        name="roomTag"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="hidden" name="roomTags" value={JSON.stringify(tags)} />
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default RoomTags;
