const mongoose = require('mongoose');
const AcademicSchema = new mongoose.Schema({
    nome: String,
    login: String,
    senha: String,
    perfil: Number,
});

module.exports = mongoose.model('Academic', AcademicSchema);