const express = require('express');

const router = express.Router();

const usersController = require('../controller/form_controller');

router.get('/form', usersController.form);
router.get('/create', usersController.create);

module.exports = router;

