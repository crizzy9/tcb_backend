const base = require('./base');

/**
 * Environment configuration (production)
 */
module.exports = Object.assign({}, base, {
    //App
    APP_BASE_URL: 'https://thecodebase.com',
    APP_ORIGINS: [
        /[[a-z0-9\-]+\.]*thecodebase\.com/,
    ],

    //API
    API_BASE_URL: 'https://api.thecodebase.com',
    API_BASE_PATH: '/api/',

    //Server
    SERVER_PORT: process.env.PORT || 80,
    SERVER_LATENCY: false,
    SERVER_LATENCY_MIN: 0,
    SERVER_LATENCY_MAX: 0,

    //Database
    DB_URI: process.env.MONGODB_URI,
    DB_USER: '',
    DB_PASS: '',
    DB_DEBUG: false,
    DB_AUTO_INDEX: false,

    //S3
    // S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    // S3_SECRET_KEY: process.env.S3_SECRET_KEY,
    // S3_REGION: 'ap-northeast-2',
    // S3_BUCKET: 'content.thecodebase.com',
    // S3_BUCKET_URL: 'https://content.thecodebase.com/',

    //Google cloud
    // GCLOUD_PROJECT_ID: '',
    // GCLOUD_BUCKET_CONTENT: '',

    //Sendgrid
    // SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

    //Error handling middleware
    ERROR_MIDDLEWARE: [
        'normalize', 'log-to-console', 'track-with-sentry',
    ],

    //Tokens
    TOKEN_SECRET: process.env.TOKEN_SECRET,
});
