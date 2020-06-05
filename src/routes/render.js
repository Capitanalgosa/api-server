const express=require('express');
const router = express.Router();
const render= require('../controllers/render');

router.get('/', render.goHome);
router.get('/home', render.cient);

module.exports = router;