const mongoose = require('mongoose');
const Incidents = mongoose.model('Incidents');
const Academico = require('../models/Academic');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const incidents = await Incidents.paginate({}, { page, limit: 10 });
        return response.json(incidents);
    },

    async show(request, response) {
        const incidents = await Incidents.findById(request.params.id);
        return response.json(incidents);
    },

    async register(request, response) {

        const { descricao, localizacao } = request.body;

        var today = new Date();

        // Dia
        var currentYear = today.getFullYear();
        var currentMonth = today.getMonth();
        currentMonth = ("0" + currentMonth).slice(-2);
        var currentDay = today.getDay();
        currentDay = ("0" + currentDay).slice(-2);
        var data = currentYear + '-' + currentMonth + '-' + currentDay;

        // Hora
        var currentHours = today.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        var currentMins = today.getMinutes();
        currentMins = ("0" + currentMins).slice(-2);
        var currentSecs = today.getSeconds();
        currentSecs = ("0" + currentSecs).slice(-2);
        var hora = currentHours + ':' + currentMins + ':' + currentSecs;

        const _id = request.headers.authorization;
        let user = await Academico.findOne({ _id });
        const criador = user.nome;

        const incident = await Incidents.create({
            data,
            hora,
            descricao,
            localizacao,
            pontuacao: 0,
            upvotes: [],
            downvotes: [],
            estado: 0,
            criador,
        });

        return response.json(incident);
    },

    async updateVotes(request, response){
        const id = request.params.id;
        const incident = await Incidents.findById(id);
        const upvotes = incident.upvotes.length;
        const downvotes = incident.downvotes.length;
        const totalVotes = upvotes - downvotes;
        const updatedIncident = await Incidents.findByIdAndUpdate(id, {pontuacao: totalVotes}, {new: false});
        return response.json(updatedIncident);
    },

    async upvote(request, response) {
        const voted = await Incidents.findById(request.params.id);
        if(voted.upvotes.includes(request.headers.authorization)){
            let incidents = await Incidents.findByIdAndUpdate(request.params.id, {$pull: {upvotes: request.headers.authorization}}, {new: true})
            return response.json(incidents);
        }else{
            let incidents = await Incidents.findByIdAndUpdate(request.params.id, {$pull: {downvotes: request.headers.authorization}}, {new: true})
            incidents = await Incidents.findByIdAndUpdate(request.params.id, {$push: {upvotes: request.headers.authorization}}, {new: true})
            return response.json(incidents);
        }
    },

    async downvote(request, response) {
        const voted = await Incidents.findById(request.params.id);
        if(voted.downvotes.includes(request.headers.authorization)){
            let incidents = await Incidents.findByIdAndUpdate(request.params.id, {$pull: {downvotes: request.headers.authorization}}, {new: true})
            return response.json(incidents);
        }else{
            let incidents = await Incidents.findByIdAndUpdate(request.params.id, {$pull: {upvotes: request.headers.authorization}}, {new: true})
            incidents = await Incidents.findByIdAndUpdate(request.params.id, {$push: {downvotes: request.headers.authorization}}, {new: true})
            return response.json(incidents);
        }
    },

}