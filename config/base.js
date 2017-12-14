const pkg = require('../package.json');

/**
 * Environment configuration
 */

module.exports = {

    //App
    APP_NAME: pkg.name,
    APP_VERSION: pkg.version,
    APP_TITLE: `The Code Base`,

    //Email identities
    EMAIL_IDENTITY_NOREPLY: `The Code Base <no-reply@tcb.com>`,
    EMAIL_IDENTITY_ADMIN: 'Admin <admin@tcb.com>',

    //Authentication
    // REFRESH_TOKEN_COOKIE_MAX_AGE: 30 * 24 * 3600, //seconds
    // SECURE_STATUS_EXPIRATION: 300, //seconds

    //Tokens
    // TOKEN_AUDIENCE: 'http://jamnjam.com/app',
    // TOKEN_ISSUER: 'http://jamnjam.com/api',
    // TOKEN_EXP_ACCESS: 3600,
    // TOKEN_EXP_REFRESH: 30 * 24 * 3600,
    // TOKEN_EXP_VERIFY_EMAIL: 7 * 24 * 3600,
    // TOKEN_EXP_RESET_PASSWORD: 24 * 3600,

    //Cryptography
    BCRYPT_ROUNDS: 15,

    //User
    USER_PASSWORD_MIN_LENGTH: 8,
    USER_AVATAR_MAX_FILE_SIZE: 512 * 1024, //bytes
}