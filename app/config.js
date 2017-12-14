const path = require('path');
const chalk = require('chalk');
const argv = require('yargs').argv;


// Determine enviornment and paths
const ENV = argv.env || process.env.APP_ENV || 'dev';
const BASE_PATH = path.resolve(path.join(__dirname, '..'));
const CONFIG_PATH = path.join(BASE_PATH, 'config');

// Loading enviornment configuration
const envCfg = loadConfig(ENV);
const localCfg = loadConfig('local');
const mergedCfg = Object.assign(envCfg, localCfg, {ENV});

module.exports = mergedCfg;

// Helper function to load config file
function loadConfig(env) {
    const configPath = path.join(CONFIG_PATH, env);
    try {
        return require(configPath);
    }
    catch(e) {
        if(env === 'developement') {
            return loadConfig('dev');
        }
        if(env === 'production') {
            return loadConfig('prod');
        }
        if(env !== 'local') {
            console.log(
                chalk.red('Could not load environment configuration file'),
                chalk.magenta(env + '.js')
            );
            process.exit(0);
        }
        return {};
    }
}