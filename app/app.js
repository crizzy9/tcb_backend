const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

// Define these middlewares in app and use it
const routes = require('./api/routes');
// const errors = require();
// const authenticate = require();
// const initLocals = require();
// const ensureValidOrigin = require();
// const BadRequestError = errors.BadRequestError;

const config = require('./config');

// Configuration
const APP_VERSION = config.APP_VERSION;
const APP_ORIGINS = config.APP_ORIGINS;

// Initilize
require('./init/db')();

// Exporting express module with configurations
module.exports = function () {

    // Creating express instance
    const app = express();

    // Setting locals
    app.locals = config;

    // Trust proxy (for Cloud hosted forwarding of requests)
    app.set('trust_proxy', 1);

    // CORS
    // app.use(cors({
    //     origin: APP_ORIGINS,
    //     credentials: true // needed for cross domain cookies to work
    // }));
    
    app.use(cors({
        origin: '*',
        credentials: true
    }));

    app.options('*', cors());

    // Compression
    app.use(compression({
        level: 3,
        filter(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        }
    }));

    // Request logger
    app.use(morgan('dev'));

    // Parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // Parse application/json
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    // Add cookie parser middleware
    app.use(cookieParser());

    // Ensure valid origin, initialize locals and find logged-in user
    // app.use(ensureValidOrigin);
    // app.use(initLocals);
    // app.use(authenticate);

    // Initialize passport
    app.use(passport.initialize());

    // Set global headers
    app.all('/*', (req, res, next) => {
        res.header('X-Version', APP_VERSION);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Credentials', true);
        // next is very important if removed router wont load
        next();
    });

    // Fullfill pre-flight/promise request
    app.options('/*', function(req, res) {
        console.log("Resolving options request");
        console.log(req);
        res.send(200);
    });

    // Load router
    // router(app);

    // Loading routes
    app.use('/', routes);

    // Handle invalid routes (e.g. not captured by router)
    // app.all('/*', (req, res, next) => {
    //     next(new BadRequestError('Invalid route'));
    // });

    // Create error handling middleware stack
    // errors.middleware().forEach(handler => app.use(handler));

    // Return express server instance
    return app;

}