const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const userController = require('@controllers/api/user.controller');


const {userRegisterValidate} = require('@validations/user.validation')

router.get('/', userController.index);

router.post('/', (req, res) => {
    res.send('create new user');
});

router.post('/register', userRegisterValidate, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors: errors.array()
        });
    }
    userController.register(req, res);
});

module.exports = router;