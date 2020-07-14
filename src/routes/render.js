const express=require('express');
const router = express.Router();
const render= require('../controllers/render');

/* router.get('/', render.goHome);
router.get('/home', render.cient);
router.get('/home/*', render.notFound);  */
router.get('/admin', render.admin);
router.get('/admin/*', render.admin);
router.get('*', render.notFound);
// Para renderizar APPS de angular, es mejor usar * y la app, para que sea angular que se encarge de las rutas
module.exports = router;