'use strict'

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const router = express.Router();
const indexModel = require('../models/index_query');

/* GET users listing. */
router.get('/volunteer', function(req, res, next) {
  res.render('volunteer');
});

module.exports = router;
