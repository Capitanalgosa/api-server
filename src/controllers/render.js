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

render.notFound = async (req,res) => {
    try {
        await res.sendFile(path.join(__dirname, '../../dist/api-not-found','/index.html'));
        console.log(chalk.bold.green('Renderizando api-notFound'));
    } catch (error) {
        console.log(chalk.red('Ah ocurrido un beta:'));
        console.log(error);
    }
}

render.admin = async (req,res) => {
    try {
        await res.sendFile(path.join(__dirname, '../../dist/api-admin','/index.html'));
        console.log(chalk.bold.green('Renderizando api-admin'));
    } catch (error) {
        console.log(chalk.red('Ah ocurrido un beta:'));
        console.log(error);
    }
}

render.goHome = (req,res) => {
    res.redirect('/api/home');
}

module.exports = render;