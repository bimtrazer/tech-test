import React from "react";

const BlockCard = ({block}) => {
  return (
    <div>
      <h3>{block.description}</h3>
      <p>Start Date: {block.startDate}</p>
      <p>End Date: {block.endDate}</p>
      <p>Progress: {block.progress}%</p>
    </div>
  );
};

export default BlockCard;
