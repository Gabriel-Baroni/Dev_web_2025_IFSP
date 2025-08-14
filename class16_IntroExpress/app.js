const express = require('express');
const axios = require('axios');
const lodash = require('lodash');

const app = express();

app.get("/", (req, res) =>{
    res.send("Essa página irá utilizar um API de pokemon");
})

app.get('/pokemon',async (req, res) =>{
   console.log("Buscar...");
   try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/lapras');

    const pokemon = response.data;

    const pokeCarac = {nome:pokemon.name, peso: pokemon.weight, ordem: pokemon.order, altura: pokemon.height};

    console.log(pokeCarac);

    const pokeCaracSorted = lodash.orderBy(pokeCarac);
    
    res.json(pokeCaracSorted);

  } catch (error) {
    console.error('Erro:', error);
  }
   
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
