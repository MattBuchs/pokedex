const dataMapper = require('../dataMapper.js');

const mainController = {
    homePage: async (req, res) => {
        try {
            const pokemonList = await dataMapper.getAllPokemon();

            res.render('home', {pokemonList} );
        }
        catch(error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    DisplayPokemonSeleted: async (req, res) => {
        const pokemonName = req.params.namePokemon;

        try {
            const pokemon = await dataMapper.getDetailsPokemon(pokemonName);
            const typePokemon = await dataMapper.getNameOnTypePokemon(pokemonName);
            //console.log(pokemon);

            res.render('details', {pokemon, typePokemon} );
        }
        catch(error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
};

module.exports = mainController;