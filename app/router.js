const express = require('express');

const router = express.Router();

// on importe nos controllers
const mainController = require('./controllers/mainController');

// route de la page d'accueil
router.get('/', mainController.homePage);

// route de la page détail
router.get('/detail-pokemon/:id', mainController.detailPage);

// route de la page type de pokemon
router.get('/list-type-pokemon', mainController.listTypePage);

// route de la page type de pokemon paramétrée
router.get('/list-type-pokemon/:name', mainController.typePokemonPage);

// route de la page type de pokemon paramétrée
router.get('/list-type-pokemon/:name/pokemon-by-type', mainController.typePokemonPage);

// route de la page 404
router.get('/404');

// on exporte le router 
module.exports = router;