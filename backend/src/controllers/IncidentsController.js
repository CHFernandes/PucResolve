const Incidents = require('../models/Incidents');

module.exports = {
    async register(request, response) {
        console.log(request.body);

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

        const incident = await Incidents.create({
            data,
            hora,
            descricao,
            localizacao,
            pontuacao: 0,
            upvotes: [],
            downvotes: [],
        });

        return response.json(incident);
    }
}