const Categoria = require('./../models/categoriasModel');
const Articulos = require('./../models/articuloModel');
const Admin = require('./../models/adminModel');

const chalk = require('chalk');
const jwt = require('jsonwebtoken');


const crudCtrl = {};

crudCtrl.catGetAll = async (req,res) =>{
    try {
        const categorias = await  Categoria.find();
    console.log(chalk.bold.green('[CATEGORIAS ENCONTRADAS]'));
        res.json(categorias);   
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('catGetAll')}`));
        console.log(error);   
        res.send('[ERROR ENCONTRADO]: catGetAll');
    }
    
}
crudCtrl.artGetAll = async (req,res) =>{
    try {
        const articulos = await  Articulos.find();
    console.log(chalk.bold.green('[ARTICULOS ENCONTRADOS]')); 
        res.json(articulos);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('artGetAll')} `));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: artGetAll');
    }
    
}
crudCtrl.artByCat = async (req,res) => {
    try {
        const articulo = await Articulos.find({categoria_titulo: req.params.categoria_titulo});
    console.log(chalk.bold.green('[ARTICULOS ENCONTRADOS]'));
        res.json(articulo);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('artByCat')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: artByCat');
    }
   
}
crudCtrl.catGetByTitle = async (req,res) => {
    try {
        console.log(`[${req.params.categoria_titulo}]`);
        const categoria = await Categoria.find({titulo: req.params.categoria_titulo});
    console.log(chalk.bold.green('[CATEGORIAS ENCONTRADAS]'));
        res.json(categoria);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('carGetByTitle')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: catGetByTitle');
    }
}
crudCtrl.createCat = async (req,res)=>{
    const categoria = new Categoria({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        conclucion: req.body.conclucion,
        url_image: req.body.url_image,
        shortDescripcion: req.body.shortDescripcion
    })
    try {
        await categoria.save();
        console.log(chalk.bold.green('[CATEGORIA CREADA]'));
        res.json(categoria); 
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('createCat')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: createCat');
    }
    
}
crudCtrl.updateCat = async (req,res)=>{
    const {id} = req.params;
    const object = {
        titulo:req.body.titulo,
descripcion:  req.body.descripcion,
conclucion: req.body.conclucion,
url_image: req.body.url_image,
shortDescripcion: req.body.shortDescripcion
    };
    try {
        await Categoria.findByIdAndUpdate(id, {$set: object});
        console.log(chalk.bold.green('[CATEGORIA ACTUALIZADA]'));
    res.json({status: 'Categoria Actualizada'});
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('updateCat')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: updateCat');
    }
    
}

crudCtrl.getOneCat = async (req,res)=>{
    try {
        const object = await Categoria.findById(req.params.id);
    console.log(chalk.bold.green('[CATEGORIA ENCONTRADA]'));
        res.json(object);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('getOneCat')}`));
    console.log(error);
    res.send('[ERROR ENCONTRADO]: getOneCat');
    }
}

crudCtrl.deleteCat = async (req,res)=>{
    try {
        await Categoria.findByIdAndDelete(req.params.id);
    console.log(chalk.bold.green('[CATEGORIA ELIMINADA]'));
        res.json({status: 'Elemento eliminado correctamente'});
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('deleteCat')}`));
        console.log(error);
    res.send('[ERROR ENCONTRADO]: deleteCat');
    }
}

crudCtrl.createArt = async (req,res) => {
    const articulo = new Articulos({
        titulo: req.body.titulo,
        urlImg:  req.body.urlImg,
        urlPage:  req.body.urlPage,
        descripcion:  req.body.descripcion,
        categoria_titulo: req.body.categoria_titulo
    });
    try {
        await articulo.save();
    console.log(chalk.bold.green('[NUEVO ARTICULO CREADO]'));
    res.json(articulo);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('createArt')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: createArt');
    }
};

crudCtrl.getOneArt = async (req,res) => {
    try {
        const articulo = await Articulos.findById(req.params.id);
    console.log(chalk.bold.green('[ARTICULO ENCONTRADO]'));
    res.json(articulo);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('getOneArt')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: getOneArt');
    }
}

crudCtrl.updateArt = async (req,res) => {
    const {id} = req.params;
    const articulos = {
        titulo:  req.body.titulo,
        urlImg: req.body.urlImg,
        urlPage: req.body.urlPage,
        descripcion: req.body.descripcion,
        categoria_titulo:  req.body.categoria_titulo
    };
    try {
        await Articulos.findByIdAndUpdate(id, {$set: articulos});
        console.log(chalk.bold.green('[ARTICULOS ACTUALIZADO]'));
        res.json({status: 'Articulo Actualizado'});  
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('updateArt')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: updateArt');
    }  
}

crudCtrl.deleteArt = async (req,res) => {
    try {
        await Articulos.findByIdAndDelete(req.params.id);
        console.log(chalk.bold.green('[ARTICULO ELIMINADO]'));
        res.json({status: 'Articulo Eliminado :D'});   
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('deleteArt')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: deleteArt');
    }  
}
crudCtrl.createAdmin = async (req,res) => {
   
    const admin = new Admin({
        nombre: req.body.nombre,
        password: req.body.password ,
        email: req.body.email
    })
    // const errors = [];
    /*  if (admin.password != confirm_password) {
        errors.push({mensaje: 'Error las contraseñas no coincidesn'})
        res.json(errors);
        } */
        /* if (admin.password < 4) {
            errors.push({mensaje: 'La contraseña debe tener mas de 4 caracteres'})
            res.json(errors);
        }
        if (errors.length > 0 ) {
            
        } else {
            
        } */
        try {
            admin.password = await admin.encriptarPassword(admin.password);
            await admin.save();
            const token = jwt.sign({_id: admin._id}, 'palabraSecreta');
            console.log(chalk.bold.green('[ADMIN CREADO]'));
            res.status(200).json({token}); 
        } catch (error) {
            console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('createAdmin')}`));
        console.log(error); 
        res.send('[ERROR ENCONTRADO]: createAdmin');
        }
    
}
crudCtrl.validateAdmin = async (req,res) => {
    const {email,password} = await req.body;
// TODO: Tratar de implmentar el trycath aqui de alguna manera, puede ser en la parte donde cnsulta a la base de datos
    const admin = await Admin.findOne({email})
    if (!admin) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: El correo no existe ${chalk.white('validateAdmin')}`));
        res.status(401).send("El correo no existe");
        return;
    } 
    const math = await admin.mathPassword(password);
    if (math) {
        const token = jwt.sign({_id: admin._id}, 'palabraSecreta');
    return res.status(200).json({token});
    } else {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: La contraseña es incorrecta ${chalk.white('validateAdmin')}`));
        res.status(401).send('Contraseña Incorrecta');   
    }
// if (admin.password !== password) {       }
}

crudCtrl.verifyToken =  function(req,res,next) {
    if (!req.headers.authorization) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: Peticion sin Permiso ${chalk.white('verifyToken')}`));
        return res.status(401).send('Peticion sin Permiso');
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: Peticion sin Permiso ${chalk.white('verifyToken')}`));
        return res.status(401).send('Peticion sin Permiso');
    }
    const payload = jwt.verify(token, 'palabraSecreta');
    req.adminId = payload._id;
    next();
}

crudCtrl.getAllAdmin = async(req,res) => {
    try {
        const admin = await Admin.find();
        console.log(chalk.bold.green('[ADMINS ENCONTRADAS]'));
        res.json(admin);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: getAllAdmin ${chalk.white('getAllAdmin')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: getAllAdmin');
    }
}   
crudCtrl.getOneAdmin = async(req,res) => {
    try {
        const admin = await Admin.find({email: req.params.email});
    console.log(chalk.bold.green('[ADMIN ENCONTRADO]'));
    res.json(admin);
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: getOneAdmin ${chalk.white('getOneAdmin')}`));
        console.log(error);

        res.send('[ERROR ENCONTRADO]: getOneAdmin');
    }
}
crudCtrl.updateAdmin = async (req,res) => {
    const {email} = req.params;
    const admin = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    };
    const admim = new Admin()
    try {
    admin.password = await admim.encriptarPassword(admin.password);
       await Admin.findByIdAndUpdate(email, {$set: admin});
       console.log(chalk.bold.green('[ADMIN ACTUALIZADO]'));
       res.status(200).json({status: 'Admin Actualizado'});  
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('updateAdmin')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: updateAdmin');
    }
}

crudCtrl.deleteAdmin = async (req,res) => {
    try {
        const {email} = req.params
        await Admin.findByIdAndDelete(email);
        console.log(chalk.bold.green('[ADMIN ELIMINADO]'));
        res.json({status: 'Admin Eliminado :D'});
    } catch (error) {
        console.log(chalk.bold.red(`[ERROR ENCONTRADO]: ${chalk.white('deleteAdmin')}`));
        console.log(error);
        res.send('[ERROR ENCONTRADO]: deleteAdmin');
    }
}

crudCtrl.test = () => {
    console.log('This is a test :D');
}

module.exports = crudCtrl;