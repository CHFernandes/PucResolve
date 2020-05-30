const { Router } = require('express');
const Academic = require('./models/Academic');

const routes = Router();

routes.post('/login', (request, response) => {
    console.log(request.body);
    return response.json({message: "Rota de Login"});
});

routes.post('/register', async (request, response) => {
    console.log(request.body);

    const{ nome, login, senha, perfil } = request.body;

    const academic = await Academic.create({
        nome,
        login,
        senha,
        perfil,
    });

    return response.json(academic);
});

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