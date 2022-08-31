const router = require('express').Router();
const {getAllPokemons} = require("./Models/getAllPokemons");
const { Pokemon, Type } = require("../db");


router.get('', async (req, res)=>{
    const {name} = req.query; //esto es lo que escribiria por url, la voy a usar para buscar por nombre en el front
    const totalPokemons = await getAllPokemons();
    if (name){
        const pokemonName = totalPokemons.filter(ele=>ele.name.toLowerCase().includes(name.toLowerCase())) //ele.name es el personaje que va a llegar desde la api en 
        if(pokemonName.length){                                                                            //mayusculas y el name que llega del query tambien que se ponga en minuscula
            return res.status(200).send(pokemonName);   //si existe pokemonName que lo retorne
        } return res.send({error: 'Pokemon not found'})
    } else {
        try{
            return res.status(200).send(totalPokemons); //si no existe pokemonName que me retorne todos
        } catch(error){
            res.send(error)
        }
        
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params; // es lo mismo que hacer const id = req.params.id;
    const totalPokemons = await getAllPokemons(); //traemos todos
    if(id){
        const pokemonId = await totalPokemons.filter(pokeId => pokeId.id == id); 
        if(pokemonId.length){
            try{
                return res.status(200).send(pokemonId) //enviamos el pokemon
            } catch(error){
                res.send(error)
            }
        }
    }
})

router.post('', async (req, res)=>{  // esta el '/pokemons' implicito por asi decirlo
    const {
        img, name, type, id, hp, attack, defense, speed, weight, height, createdInDb  //me traigo por body todo lo que quiero
    } = req.body;
    
    try{
        const newPokemon = await Pokemon.create({ //uso el modelo con el metodo create() y le paso los mismos atributos menos el type
            img, name, id, hp, attack, defense, speed, weight, height, createdInDb
        });
    
        const typeDb = await Type.findAll({  //de aca traemos el type que coincida con lo de req.body, de nuestra base de datos
            where: {
                name: type
            }
        });
        console.log(typeDb)
        await newPokemon.addType(typeDb); //creo el nuevo pokemon, el addType() es un metodo de sequelize, podria ser addPablo()
        res.send('newPokemon');
    } catch (error){
        res.send(error);
    }
    
})


router.delete('/:id', async (req, res)=>{ //incluyo esta ruta para el crud
    try{
       const {id} = req.params;
       res.json(await Pokemon.destroy({ //eliminamos el pokemon donde el id sea el nos llega de req.params
            where: {id} 
       }))
    } catch(error){
        res.send(error)
    }
})

module.exports = router;
