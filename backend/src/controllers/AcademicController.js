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
    },

    async login(request, response){
        const { login, senha } = request.body;

        let user = await Academico.findOne({ login });

        if(!user){
            return response.json("Usuário não encontrado");
        }

        if(user.login == login && user.senha == senha){
            let permitido = {
                nome: user.nome,
                perfil: user.perfil
            };

            return response.json(permitido);
        }else{
            return response.json("Senha incorreta");
        }

        
    }
}