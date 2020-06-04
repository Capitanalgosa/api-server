const express = require('express');
const app = express();
const chalk = require('chalk');

app.set('port', process.env.PORT || 3000 || 3000);

app.get('/', (req,res) => res.send('Hello world'));

app.listen(app.get('port'), () => {
    console.log('\n'+chalk.bold.green(`El servidor esta activado en el puerto ${chalk.bold.white(app.get('port'))}`));
});