import React, { useState } from "react";
import { createBlock } from "../../services/api";
import Swal from "sweetalert2";
import styles from "./BlockForm.module.css";
const BlockForm = () => {
  const [token, setToken] = useState("token");
  const [newBlock, setNewBlock] = useState({
    description: "",
    startDate: "",
    endDate: "",
    progress: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { startDate, endDate } = newBlock;

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
      const response = await createBlock(newBlock, token);
      Swal.fire({
        title: "Éxito!",
        text: "Bloque creado correctamente",
        icon: "success",
        confirmButtonText: "Cool",
      });
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
    setNewBlock({
      ...newBlock,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.contInputs}>
        <label className={styles.label}>Description</label>
        <input
          type="text"
          value={newBlock.description}
          onChange={(e) => onChange(e)}
          maxLength="40"
          required
          name="description"
          className={styles.input}
          placeholder="ingrese su descripcion"
        />
      </div>
      <div className={styles.contInputs}>
        <label className={styles.label}>Start Date</label>
        <input
          type="date"
          value={newBlock.startDate}
          onChange={(e) => onChange(e)}
          required
          name="startDate"
          className={styles.input}
        />
      </div>
      <div className={styles.contInputs}>
        <label className={styles.label}>End Date</label>
        <input
          type="date"
          value={newBlock.endDate}
          onChange={(e) => onChange(e)}
          required
          name="endDate"
          className={styles.input}
        />
      </div>
      <div className={styles.contInputs}>
        <label className={styles.label}>Progress</label>
        <input
          type="number"
          value={newBlock.progress}
          onChange={(e) => onChange(e)}
          min="0"
          max="100"
          required
          name="progress"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>Save Block</button>
    </form>
  );
};

export default BlockForm;
