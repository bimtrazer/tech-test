import React, { useState } from "react";
import EditBlockForm from "../EditBlockForm/EditBlockForm";
import styles from "./BlockCard.module.css";
const BlockCard = ({ block }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div
          className={styles.buttonContainer}
          >
        <button
          onClick={handleEditClick}
          title="Editar Bloque"
          className={styles.button}
        >
          🖍
        </button>
      </div>
      <h3>{block.description}</h3>
      <p>Start Date: {block.startDate}</p>
      <p>End Date: {block.endDate}</p>
      <p>Progress: {block.progress}%</p>

      {isEditing && <EditBlockForm block={block} onClose={handleClose} />}
    </div>
  );
};

export default BlockCard;
