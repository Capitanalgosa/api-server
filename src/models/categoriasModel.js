const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriaSchema = new Schema({
    titulo: {type: String, require: true},
    descripcion: {type: [String], require: true},
    conclucion: {type: [String], require: true},
    url_image: {type: String, required: true},
    shortDescripcion: {type: String, required: true}
})

module.exports = mongoose.model('Categoria', categoriaSchema);