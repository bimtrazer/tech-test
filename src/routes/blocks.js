const express = require("express");
const blockSchema = require("../models/block");

const router = express.Router();

// Crea un nuevo bloque - /blocks
router.post('/blocks', (req, res) => {
    //res.send("crear bloque");
    const block = blockSchema(req.body);

    //lo guardamos en la base de datos en MongoDB Atlas
    block
        .save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


// Devuelve todos los bloques - /blocks
router.get('/blocks', (req, res) => {
    blockSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

// Actualiza un bloque - /blocks/:id
router.put('/blocks/:id', (req, res) => {
    const {id} = req.params;
    const { description, startDate, endDate, progress} = req.body;

    blockSchema
        .updateOne({_id: id}, { $set: {description, startDate, endDate, progress}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

// Elimina un bloque - /blocks/:id
router.delete('/blocks/:id', (req, res) => {
    const {id} = req.params;

    blockSchema
        .deleteOne({_id: id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

module.exports = router;