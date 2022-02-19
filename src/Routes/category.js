const express = require('express');
const category = require('../models/category');
const slugify = require('slugify');
const { addCategory } = require('../controllers/category');

const router = express.Router();

router.post('/category/create',addCategory );
module.exports=router;