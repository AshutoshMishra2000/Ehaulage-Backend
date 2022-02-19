const express = require('express');

const { signup, signin} = require('../controllers/auth');
const { validateSignUpRequest, isRequestValidated, validateLoginRequest } = require('../validation/auth');
const router = express.Router();




router.post('/signup',validateSignUpRequest,isRequestValidated,
signup);
router.post('/signin',validateLoginRequest,isRequestValidated,signin);

module.exports = router;



