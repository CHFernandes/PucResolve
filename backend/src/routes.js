const { Router } = require('express');
const AcademicController = require('./controllers/AcademicController');

const routes = Router();

routes.post('/login', AcademicController.login);

routes.post('/register', AcademicController.register);

routes.post('/incident', (request, response) => {
    console.log(request.body);
    return response.json({message: "Rota de Cadastro de ocorrências"});
});

routes.get('/getIncidents', (request, response) => {
    console.log(request.body);
    return response.json({message: "Rota de ocorrências abertas"});
});

routes.put('/updateIncident', (request, response) => {
    console.log(request.body);
    return response.json({message: "Rota de atualização de ocorrências"});
});

routes.get('/showAll', (request, response) => {
    console.log(request.body);
    return response.json({message: "Rota de exibir todas as ocorrências cadastradas"});
});

module.exports = routes;