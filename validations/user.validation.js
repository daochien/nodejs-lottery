const {body} = require('express-validator');

const userRegisterValidate = [
    body('name')
        .isString().withMessage('Name must be a string')
        .notEmpty().withMessage('Name is required'),
    body('email')
        .isEmail().withMessage('Invalid email address')
        .notEmpty().withMessage('Email is required'),
    body('password')
        .isLength({min: 8}).withMessage('Password must be at least 6 characters long')
];

module.exports = {
    userRegisterValidate
};