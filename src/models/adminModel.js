const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

// TODO: Seria bueno crear un nuevo campo de confirm-password en todos los formularios de registro tienen uno
const adminSchema = new Schema({
    nombre: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true, unique: true}
}, {
    timestamps: true
}) 
adminSchema.methods.encriptarPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}
// FIXME: No se si esta funcion tenga que ser asyncrona en videl no lo Enumerator, pero para usar await titnes que usar async toncess
adminSchema.methods.mathPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Admin', adminSchema);