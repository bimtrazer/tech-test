const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express ();
const port = process.env.PORT || 3000;

//rutas
app.get('/', (req, res) => {
    res.send('welcome to my project')
})

//se crea coneccion con mongo DB Atlas
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado a la base de datos en MongoDB Atlas'))
    .catch((error) => console.error(error)
    )

app.listen(port, () => console.log('servidor corriendo en puerto', port));

