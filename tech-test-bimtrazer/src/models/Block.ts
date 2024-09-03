import { Schema, model, models } from "mongoose";

const blockSchema = new Schema({
  description: {
    type: String,
    required: [true, "La descripción es requerida"],
    unique: true,
    trim: true,
    maxlength: [40, "La descripción no puede ser mayor a 40 caracteres"],
    immutable: true,
  },
  startDate: {
    type: String,
    required: [true, "La fecha de inicio es requerida"],
    trim: true,
  },
  endDate: {
    type: String,
    required: [true, "La fecha de finalización es requerida"],
    trim: true,
  },
  progress: {
    type: Number,
    required: [true, "El progreso es requerido"],
    min: [0, "El progreso debe ser mayo a 0"],
    max: [100, "El progreso debe ser inferior a 100"],
  },
});

export default models.Block || model("Block", blockSchema);
