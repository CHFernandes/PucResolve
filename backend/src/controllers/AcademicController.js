const Academico = require('../models/Academic');

module.exports = {
    async register(request, response){
        const { nome, login, senha, perfil} = request.body;

        let academic = await Academico.findOne({ login });

        if(!academic){
            academic = await Academico.create({
                nome,
                login,
                senha,
                perfil,
            });
        }
        return response.json(academic);
    }
}