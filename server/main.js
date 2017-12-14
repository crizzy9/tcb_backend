// const express = require('express');
const app = require('../app/app');
const path = require('path');
const chalk = require('chalk');
const config = require('../app/config');

// Configuration
const ENV = config.ENV;
const APP_NAME = config.APP_NAME;
const SERVER_PORT = config.SERVER_PORT;

// fix cwd if run directly from path
const cwd = process.cwd().split(path.sep);
if (cwd.length && cwd[cwd.length - 1] === 'server') {
  cwd.pop();
  process.chdir(cwd.join(path.sep));
}

// Error Handler
function expressErrorHandler(err) {
    if(err.errno === 'EADDRINUSE') {
        console.log(chalk.red('Web server port %s is already in use'), SERVER_PORT);
    }
    else {
        console.log(chalk.red('Web server error:'));
        console.log(chalk.red(err));
    }
    process.exit(-1);
}

// Initializing server
console.log('\nRunning application', chalk.bgBlue.yellow(APP_NAME), 'in the', chalk.bgBlue.yellow(ENV), 'enviornment');
console.log('Starting express server...');

// Using pre configured express instance to start the server
const server = app().listen(SERVER_PORT, function() {
    if (!this.address()) {
        return;
    }

    const host = this.address().address.replace('::', 'localhost');
    const port = this.address().port;
    const address = host + ':' + port;

    console.log(chalk.blue('Express server started @'), chalk.bgBlue.yellow(address));
});

server.on('error', expressErrorHandler);