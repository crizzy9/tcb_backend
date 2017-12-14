const base = require('./base');

/**
 * Environment configuration (development)
 **/
module.exports = Object.assign({}, base, {
    //App
    APP_BASE_URL: 'http://localhost:4200',
    APP_ORIGINS: [
        /localhost\:4200/,
        /192\.168\.1\.[0-9]+/,
    ],

    //API
    API_BASE_URL: 'http://localhost:3000',
    API_BASE_PATH: '/api/',

    //Server
    SERVER_PORT: 3000,
    SERVER_LATENCY: true,
    SERVER_LATENCY_MIN: 500,
    SERVER_LATENCY_MAX: 1000,

    //Database
    DB_URI: 'mongodb://localhost:27017/thecodebase',
    DB_USER: '',
    DB_PASS: '',
    DB_DEBUG: true,
    DB_AUTO_INDEX: true,

    //S3
    // S3_ACCESS_KEY: 'server/local.js',
    // S3_SECRET_KEY: 'server/local.js',
    // S3_REGION: 'ap-southeast-2',
    // S3_BUCKET: 'dev-content.thecodebase.com',
    // S3_BUCKET_URL: 'https://dev-content.thecodebase.com/',

    //Google cloud
    // GCLOUD_PROJECT_ID: '',
    // GCLOUD_BUCKET_CONTENT: '',
    // GCLOUD_TEST_FILES: [],

    //Sendgrid
    // SENDGRID_API_KEY: 'server/local.js',

    //Error handling middleware
    ERROR_MIDDLEWARE: [
        'normalize', 'log-to-console',
    ],

    //Tokens
    TOKEN_SECRET: 'SECRET_KEY',
});