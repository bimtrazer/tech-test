const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); // Importar cors
const blockRoutes = require("./routes/blocks");

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Configurar CORS
app.use(express.json());
app.use('/api', blockRoutes);

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome to my project');
});

// Conexión a MongoDB Atlas
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado a la base de datos en MongoDB Atlas'))
    .catch((error) => console.error('Error de conexión:', error));

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));
