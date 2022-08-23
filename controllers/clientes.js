const { Cliente} = require("../models");

async function consultarclientes(req, res, next) {
    try {
        res.send(await Cliente.findAll());
    }
    catch (err) {
        next(err);
    }
}
async function consultarcliente(req, res, next) {
    try {
        const cliente = await Cliente.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!cliente) throw new Error("cliente não encontrado");
        res.send(cliente);
    }
    catch (err) {
        next(err);
    }
}
async function cadastrarcliente(req, res, next) { 
    try {
        const cliente = await Cliente.create(req.body);
        res.send(cliente);
    } catch (err) {
        next(err);
    }
}
async function atualizarcadastrocliente(req, res, next) { 
    try {
        const cliente = await Cliente.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!cliente) throw new Error("cliente não encontrado");

        Cliente.set(req.body);

        await Cliente.save();

        res.send(cliente);

    } catch (err) {
        next(err);
    }
}
async function deletecliente(req, res, next) { 
    try {
        const cliente = await Cliente.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!cliente) throw new Error("cliente não encontrado");

        await Cliente.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
}

module.exports = { consultarcliente,cadastrarcliente,deletecliente,atualizarcadastrocliente,consultarclientes,cadastrarcliente };