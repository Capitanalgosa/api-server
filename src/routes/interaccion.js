const express= require('express');
const router = express.Router();
const tsaMeanApi = require('../controllers/interaccion');

router.route('/admin/edit-articulos/:id')
.put(tsaMeanApi.verifyToken , tsaMeanApi.updateArt)
.delete( tsaMeanApi.verifyToken , tsaMeanApi.deleteArt)
.get(tsaMeanApi.verifyToken , tsaMeanApi.getOneArt);
router.route('/admin/edit-categorias/:id')
.put( tsaMeanApi.verifyToken , tsaMeanApi.updateCat)
// .delete(tsaMeanApi.verifyToken , tsaMeanApi.deleteCat)
.delete( tsaMeanApi.deleteCat)
.get(tsaMeanApi.verifyToken , tsaMeanApi.getOneCat);
router.route('/admin/edit-categorias')
// .post( multer.single('image') , tsaMeanApi.photos)
.post( tsaMeanApi.verifyToken , tsaMeanApi.createCat)
.get(tsaMeanApi.verifyToken , tsaMeanApi.catGetAll);
router.route('/admin/edit-articulos')
.get(tsaMeanApi.verifyToken , tsaMeanApi.artGetAll)
.post( tsaMeanApi.verifyToken , tsaMeanApi.createArt);
router.get('/articulos/catName/:categoria_titulo', tsaMeanApi.artByCat);
router.get('/categorias/catName/:categoria_titulo', tsaMeanApi.catGetByTitle);
router.post('/admin/signup', tsaMeanApi.createAdmin);
router.post('/admin/signin', tsaMeanApi.validateAdmin);
router.route('/admin/:email')
.get(tsaMeanApi.verifyToken,tsaMeanApi.getOneAdmin)
.put(tsaMeanApi.verifyToken,tsaMeanApi.updateAdmin)
.delete(tsaMeanApi.verifyToken,tsaMeanApi.deleteAdmin);
router.get('/admin', tsaMeanApi.getAllAdmin);
router.get('/categorias', tsaMeanApi.catGetAll);
router.get('/articulos', tsaMeanApi.artGetAll);


module.exports = router;