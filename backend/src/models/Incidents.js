const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const IncidentSchema = new mongoose.Schema({
    data: String,
    hora: String,
    descricao: String,
    localizacao: String,
    pontuacao: Number,
    upvotes: [String],
    downvotes: [String],
});

IncidentSchema.plugin(mongoosePaginate);

mongoose.model('Incidents', IncidentSchema);