const path = require('path');
const render={};
const chalk = require('chalk');

render.cient = async (req,res) => {
    try {
        await res.sendFile(path.join(__dirname, '../../dist/api-client','/index.html'));
        console.log(chalk.bold.green('Renderizando api-client'));
    } catch (error) {
        console.log(chalk.red('Ah ocurrido un beta:'));
        console.log(error);
    }
}

render.goHome = (req,res) => {
    res.redirect('/api/home');
}

module.exports = render;