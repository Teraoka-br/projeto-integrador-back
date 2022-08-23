const {Sequelize, DataTypes} = require('sequelize');

const { default: isEmail } = require('validator/lib/isEmail');

const database = new Sequelize('sqlite:./db.sqlite');


const Cliente = database.define('cliente',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    nome: {
        type: DataTypes.STRING(100),
        notEmpty: true
    },
    CPF: {
        type: DataTypes.STRING(15),
        notEmpty: true,
        unique: true
    },
    RG: {
        type: DataTypes.STRING(12),
        
    },
    pasta:{
        type: DataTypes.INTEGER,
        unique: true
    },
    profissao: {
        type: DataTypes.STRING(30),
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        isEmail:true
    },
    telefone: {
        type: DataTypes.STRING(15),
    notEmpty: true

    },
    rua: {
        type: DataTypes.STRING(100),
        notEmpty: true
    },
    cidade: {
        type: DataTypes.STRING(50),
        notEmpty: true
    },
    cep: {
        type: DataTypes.STRING(9),
        notEmpty: true
    },
    numero: {
        type: DataTypes.STRING(5),
        notEmpty: true
    },

});

module.exports = {database,Cliente};