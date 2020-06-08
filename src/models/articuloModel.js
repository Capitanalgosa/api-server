const mongoose = require('mongoose');
const {Schema} = mongoose;

const articuloSchema = new Schema({
    titulo: {type: String, require: true},
    urlImg: {type: String, require: true},
    urlPage: {type: String, require: true},
    descripcion: {type: [String], require: true},
    categoria_titulo: {type: [String], require: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Articulo', articuloSchema);