const {MongoMemoryServer} = require('mongodb-memory-server');
const { default: mongoose } = require('mongoose');
const express = require('express'); 
const app = express();

app.use(express.json())
const pokemon = require("./modelos/pokemon.js")

const setup = async () =>{
    const mongod =  await MongoMemoryServer.create();
    console.log("Banco em: ", mongod.getUri()); 
    await mongoose.connect(`${mongod.getUri()}banco`)

    app.get("/", (req, res) =>{
        res.send("ta no ar");
    })
    
    app.post("/pokemon", async (req, res) => {
        const {
            nome,
            genero
        } = req.body;

        const novoPokemon = new pokemon({nome: nome, genero: genero});
        await novoPokemon.save();
        res.send(novoPokemon)
    });
    app.get("/pokemons", async (req, res) =>{
        const pokemons = await pokemon.find({});
        res.send(pokemons);
    })
    app.listen(3000, ()=>{
        console.log("Ouvindo em https://localhost:3000")
    })
} 

setup();