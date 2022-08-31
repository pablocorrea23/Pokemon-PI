const getApiPokemons = require('./getApiPokemons');
const getDbPokemonInfo = require('./getPokemonDb');

const getAllPokemons = async()=>{  //en esta tercer funcion concatenamos las dos anteriores
    const [apiPokemonInfo, dbPokemonsInfo] = await Promise.all([getApiPokemons(), getDbPokemonInfo()]); //a las funciones las ejecuto porque sino no devuelve nada

    const allPokemonsInfo = apiPokemonInfo.concat(dbPokemonsInfo);
    return allPokemonsInfo;
}

module.exports = {getAllPokemons}