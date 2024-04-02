const {Schema} = require("mongoose");
const { default: mongoose } = require('mongoose');

const schemaTipo = new Schema({
    nome: String
}); 

const schemaHabilidade = new Schema({
    nome: String,
    sp: Number,
    tipo: schemaTipo
}); 

const schemaPokemon = new Schema({
    nome: String,
    genero: String,
    tipos: [schemaTipo],
    habilidades: [schemaHabilidade]

}); 

const modeloPokemon = mongoose.model('Pokemon', schemaPokemon);

module.exports = modeloPokemon; 