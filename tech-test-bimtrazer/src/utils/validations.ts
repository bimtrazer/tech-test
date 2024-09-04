export const validateBlock = (block: any) => {
  const errors: Record<string, string> = {};

  if (!block.description || block.description.length === 0) {
    errors.description = "La descripción es requerida.";
  } else if (block.description.length > 40) {
    errors.description = "La descripción no puede ser mayor a 40 caracteres.";
  }

  if (!block.startDate) {
    errors.startDate = "La fecha de inicio es requerida.";
  }

  if (!block.endDate) {
    errors.endDate = "La fecha de finalización es requerida.";
  } else if (new Date(block.startDate) > new Date(block.endDate)) {
    errors.endDate =
      "La fecha de finalización no puede ser menor a la fecha de inicio.";
  }

  if (block.progress < 0 || block.progress > 100) {
    errors.progress = "El progreso debe estar entre 0 y 100.";
  }

  return errors;
};
