const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const typeController = require('./controllers/typeController');
const searchController = require('./controllers/searchController');

router.get('/', mainController.homePage);
router.get('/pokemon/:namePokemon', mainController.DisplayPokemonSeleted);

router.get('/types', typeController.typeSelection);
router.get('/type/:nametype', typeController.displaySelectedType);

router.get('/search', searchController.showWantedPokemon);

module.exports = router;