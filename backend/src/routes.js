const { Router } = require('express');
const Academic = require('./models/Academic');
const Incident = require('./models/Incidents');
const AcademicController = require('./controllers/AcademicController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = Router();

routes.post('/login', AcademicController.login);

routes.post('/register', AcademicController.register);

routes.post('/incident', IncidentsController.register);

routes.post('/getUser/:id', AcademicController.getUser);

routes.get('/getIncidents', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Rota de ocorrências abertas" });
});

routes.put('/updateIncident', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Rota de atualização de ocorrências" });
});

routes.get('/showAll', IncidentsController.index);

routes.post('/upvote/:id', IncidentsController.upvote);

routes.post('/downvote/:id', IncidentsController.downvote);

module.exports = routes;