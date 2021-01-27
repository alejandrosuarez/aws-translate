const routes = require('express').Router();
const TranslateController = require('./controllers/Translate');

routes.post('/translate', TranslateController.doTranslation);

module.exports = routes;