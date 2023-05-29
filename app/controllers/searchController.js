const dataMapper = require('../dataMapper.js');

const searchController = {
    showWantedPokemon: async (req, res) => {
        const valueSearchBar = req.query.search;

        try {
            const pokemonSortedByName = await dataMapper.getPokemonByName(valueSearchBar);

            res.render('home', {pokemonList: pokemonSortedByName, valueSearchBar} );
        }
        catch(error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    }
};

module.exports = searchController;