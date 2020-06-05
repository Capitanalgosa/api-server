const express=require('express');
const router = express.Router();
const render= require('../controllers/render');

router.get('/', render.goHome);
router.get('/home', render.cient);
router.get('/home/*', render.notFound);
router.get('/admin', render.admin);
router.get('/admin/*', render.notFound);
router.get('/*', render.notFound);

module.exports = router;