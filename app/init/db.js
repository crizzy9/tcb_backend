const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const config = require('../config');
const glob = require('glob');

// helper to check if ID is ObjectID
mongoose.isObjectId = function(id) {
    return (id instanceof mongoose.Types.ObjectId);
};

module.exports = function(options) {
    // Extend main config options
    const cfg = Object.assign({}, {
        uri: config.DB_URI,
        user: config.DB_USER,
        pass: config.DB_PASS,
        debug: config.DB_DEBUG,
        autoIndex: config.DB_AUTO_INDEX
    }, options || {});

    // Connect to database
    console.log('Connecting to database ', chalk.blue(cfg.uri), '...');
    mongoose.set('debug', cfg.debug);
    mongoose.connect(cfg.uri, {
        user: cfg.user,
        pass: cfg.pass,
        config: {
            autoIndex: cfg.autoIndex
        }
    });

    // Handle connection events
    mongoose.connection.on('error', error => {
        console.log(chalk.red('Database error:'));
        console.log(chalk.red(error.stack || error));
        process.exit(-1);
    });
    mongoose.connection.on('connected', () => {
        console.log(chalk.blue('Database connected @'), chalk.bgBlue.yellow(cfg.uri));
    });

    // Load models
    console.log('Loading model files...');
    glob.sync('./app/**/*.model.js').forEach(modelPath => {
        console.log(chalk.grey(' - %s'), modelPath.replace('./app/', ''));
        require(path.resolve(modelPath));
    });
}