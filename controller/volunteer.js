'use strict'

const express = require('express');
const router = express.Router();

// const passport = require('../passport')
// const bcrypt = require('bcrypt');

const volunteerModel = require('../model/volunteer_query');

router.get('/', (req, res, next) => {
  volunteerModel.findAllVolunteers()
    .then((data) => {
      res.render('volunteer')
    })
});

router.get('/:id', (req, res, next) => {
  res.render('volunteer_single');
});

module.exports = router;
