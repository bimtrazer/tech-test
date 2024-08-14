import React, { useState, useEffect } from "react";
import { updateBlock } from "../../services/api";
import Swal from "sweetalert2";
import styles from "./EditBlockForm.module.css";

const EditBlockForm = ({ block, onClose }) => {
  const [editedBlock, setEditedBlock] = useState(block);
  const [token, setToken] = useState("token");

  useEffect(() => {
    setEditedBlock(block);
  }, [block]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { startDate, endDate } = editedBlock;

    if (new Date(startDate) >= new Date(endDate)) {
      Swal.fire({
        title: "Error!",
        text: "La fecha de inicio debe ser anterior a la fecha de culminación",
        icon: "error",
        confirmButtonText: "Entendido",
      });
      return;
    }

    try {
      await updateBlock(block.id, editedBlock, token);
      Swal.fire({
        title: "Éxito!",
        text: "Bloque actualizado correctamente",
        icon: "success",
        confirmButtonText: "Cool",
      });
      onClose();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "No tenemos conexión :(",
        icon: "error",
        confirmButtonText: "Entendido",
      });
    }
  };

  const onChange = (e) => {
    setEditedBlock({
      ...editedBlock,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <div>
          <button title="Eliminar bloque">🗑</button>
          <button type="button" title="Cerrar" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={editedBlock.description}
              onChange={(e) => onChange(e)}
              maxLength="40"
              required
              name="description"
              readOnly
              className={styles.description}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              value={editedBlock.startDate}
              onChange={(e) => onChange(e)}
              required
              name="startDate"
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              value={editedBlock.endDate}
              onChange={(e) => onChange(e)}
              required
              name="endDate"
            />
          </div>
          <div>
            <label>Progress</label>
            <input
              type="number"
              value={editedBlock.progress}
              onChange={(e) => onChange(e)}
              min="0"
              max="100"
              required
              name="progress"
            />
          </div>
          <button type="submit">Update Block</button>
        </form>
      </div>
    </div>
  );
};

export default EditBlockForm;
