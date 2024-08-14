const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const blockRoutes = require("./routes/blocks");

const app = express ();
const port = process.env.PORT || 3000;

//middleware para las rutas
app.use(express.json());
app.use('/api', blockRoutes);

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

