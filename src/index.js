const express = require('express');

const app = express ();
const port = process.env.PORT || 3000;

//rutas
app.get('/', (req, res) => {
    res.send('welcome to my project')
})

app.listen(port, () => console.log('servidor corriendo en puerto', port));

