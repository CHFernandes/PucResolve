const { Router } = require('express');
const Academic = require('./models/Academic');
const Incident = require('./models/Incidents');
const AcademicController = require('./controllers/AcademicController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = Router();

routes.post('/login', AcademicController.login);

routes.post('/register', AcademicController.register);

routes.post('/incident', IncidentsController.register);

routes.get('/getIncidents', IncidentsController.index);

routes.put('/updateIncident', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Rota de atualização de ocorrências" });
});

routes.get('/showAll', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Rota de exibir todas as ocorrências cadastradas" });
});

module.exports = routes;