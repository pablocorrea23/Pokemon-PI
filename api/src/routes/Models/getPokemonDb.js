const {Pokemon, Type} = require('../../db');

const getDbPokemonInfo = async()=>{   //traemos la info de la base de datos
    const dbPokemons = await Pokemon.findAll({  //la traemos con findAll
        include: {   //que incluya
            model: Type,
            as: 'type',
            atributes: ['name'], 
            through: {
                atributes: [] //mediante el trabuto, comprobacion
            }
        }
    })
    const pokeJson = dbPokemons.map(pokemon => pokemon.toJSON());
    const pokeType = pokeJson.map(pokemon=>{
       const typeName = pokemon.type.map(type=> type.name)
       return {...pokemon, type: typeName}
    })


    return pokeType;
}

module.exports = getDbPokemonInfo;