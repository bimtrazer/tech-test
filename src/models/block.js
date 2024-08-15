const mongoose = require("mongoose");

const blockSchema = mongoose.Schema({

    //estructura del modelo de datos del bloque
        "id": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "progress": "number"
    
});

module.exports = mongoose.model('Block', blockSchema);