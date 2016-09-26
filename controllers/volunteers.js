'use strict'

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const router = express.Router();
const indexModel = require('../models/index_query');
const volunteerModel = require('../models/volunteer_query');


router.get('/volunteer', (req, res, next) => {
  res.render('volunteer');
});

router.get('/volunteer/dashboard', (req,res,next)=>{
  res.render('volunteer_dashboard');
});

router.get('/volunteer/:id', (req, res, next) => {
  res.render('volunteer_byid');
});

module.exports = router;
