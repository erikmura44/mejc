'use strict'

const express = require('express');
const router = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');

const volunteerModel = require('../model/volunteer_query');


router.get('/volunteer', (req, res, next) => {
  volunteerModel.findAllVolunteers()
  .then((data) => {
    res.render('volunteer', {
      data: data
    })
  })
});



router.get('/volunteer/:id', (req, res, next) => {
  res.render('volunteer_byid');
});

module.exports = router;
