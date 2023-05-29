const dataMapper = require('../dataMapper.js');

const typeController = {
    typeSelection: async (req, res) => {
        try {
            const typeList = await dataMapper.getAlltypePokemon();

            res.render('type', {typeList} );
        }
        catch(error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    displaySelectedType: async (req, res) => {
        const typeName = req.params.nametype;

        try {
            const pokemonType = await dataMapper.getTypePokemon(typeName);
            //console.log(pokemonType);

            res.render('home', {pokemonList: pokemonType} );
        }
        catch(error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

};

module.exports = typeController;