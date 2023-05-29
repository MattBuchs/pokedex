const database = require('./database');

const dataMapper = {
    async getAllPokemon() {
        const query = {
            text: "SELECT nom, numero FROM pokemon"
        }

        const result = await database.query(query);
        return result.rows;
    },

    async getDetailsPokemon(pokemonName) {
        const query = {
            text: "SELECT * FROM pokemon WHERE nom = $1",
            values: [pokemonName]
        }

        const result = await database.query(query);
        return result.rows[0];
    },

    async getNameOnTypePokemon(pokemonName) {
        const query = {
            text: "SELECT type.name, type.color FROM pokemon JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero JOIN type ON type.id = pokemon_type.type_id WHERE pokemon.nom = $1",
            values: [pokemonName]
        }

        const result = await database.query(query);
        return result.rows;
    },

    async getAlltypePokemon() {
        const query = {
            text: "SELECT * FROM type"
        }

        const result = await database.query(query);
        return result.rows;
    },

    async getTypePokemon(typeName) {
        const query = {
            text: "SELECT pokemon.numero, pokemon.nom, type.color FROM pokemon JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero JOIN type ON type.id = pokemon_type.type_id WHERE type.name = $1",
            values: [typeName]
        }

        const result = await database.query(query);
        return result.rows;
    },

    async getPokemonByName(value) {
        const query = {
            text: "SELECT * FROM pokemon WHERE nom ILIKE $1",
            values: [`%${value}%`]
        }

        const result = await database.query(query);
        return result.rows;
    }
};


module.exports = dataMapper;