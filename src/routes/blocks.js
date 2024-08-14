const express = require("express");
const blockSchema = require("../models/block");

const router = express.Router();

//crear bloque
router.post('/blocks', (req, res) => {
    //res.send("crear bloque");
    const block = blockSchema(req.body);

    //lo guardamos en la base de datos en MongoDB Atlas
    block
        .save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});



module.exports = router;