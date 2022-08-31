const router = require('express').Router();
const axios = require('axios');
const {Type} = require('../db')

router.get('', async(req, res)=>{
    
    const typesApi = await axios.get('https://pokeapi.co/api/v2/type') //entramos a la api y traemos los types
    const typesArray = await typesApi.data.results;
    
    typesArray.forEach(type => {  //para cada uno de typesArray entra a mi modelo Type y hace un findOrCreate
        Type.findOrCreate({
            where: {
                name: type.name
            }
        })
    });
    const allTypes = await Type.findAll();
    res.send(allTypes); //una vez hicimos lo anterior decimos que nos devuelva todo
});

module.exports = router;