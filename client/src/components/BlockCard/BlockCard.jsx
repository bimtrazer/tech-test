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
      <div className={styles.buttonContainer}>
        <button
          onClick={handleEditClick}
          title="Editar Bloque"
          className={styles.button}
        >
          🖍
        </button>
      </div>
      <h3 className={styles.description}>{block.description}</h3>
      <p className={styles.date}>Fecha de inicio: {block.startDate}</p>
      <p className={styles.date}>Fecha de fin: {block.endDate}</p>
      <div className={styles.progressContainer}>
        <progress value={block.progress} max="100" className={styles.progressBar}></progress>
        <span>{block.progress}%</span>
      </div>

      {isEditing && <EditBlockForm block={block} onClose={handleClose} />}
    </div>
  );
};

export default BlockCard;
