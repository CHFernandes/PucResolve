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

    async getUser(request, response){
        const _id = request.params.id;

        let user = await Academico.findOne({ _id });

        return response.json(user.nome);
    },

    async login(request, response){
        const { login, senha } = request.body;

        let user = await Academico.findOne({ login });

        if(!user){
            return response.status(400).json({ erro: "Usuário não encontrado"});
        }

        if(user.login == login && user.senha == senha){
            let permitido = {
                nome: user.nome,
                perfil: user.perfil,
                id: user._id
            };

            return response.json(permitido);
        }else{
            return response.status(400).json({erro: "Senha incorreta"});
        }      
    }
}