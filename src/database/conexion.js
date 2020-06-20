const mongoose = require('mongoose');
const chalk = require('chalk');

const system_variable = require('../systemVariable');

mongoose.connect(system_variable.URI_db.full())
    .then(db => console.log(chalk.green(`Estas conectado a la base de datos ${chalk.bold.white(system_variable.URI_db.name_db)}`)))
    .catch(err => {console.log(chalk.red('Ah ocurrido un error no se ah podido conectar a la base de datos')+"\n"+ err)
}    
);
    
module.exports = mongoose;