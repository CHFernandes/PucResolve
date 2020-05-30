const mongoose = require('mongoose');
const IncidentSchema = new mongoose.Schema({
    data: String,
    hora: String,
    descricao: String,
    localizacao: String,
    pontuacao: Number,
    upvotes: [String],
    downvotes: [String],
});

module.exports = mongoose.model('Incident', IncidentSchema);