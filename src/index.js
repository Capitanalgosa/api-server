const app = require('./serverConfig');
const chalk = require('chalk');

require('./database/conexion');

app.listen(app.get('port'), () => {
    console.log('\n'+chalk.bold.green(`El servidor esta activado en el puerto ${chalk.bold.white(app.get('port'))}`));
});