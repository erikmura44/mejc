'use strict'

const express = require('express');
const router = express.Router();

// const passport = require('../passport')
// const bcrypt = require('bcrypt');

const volunteerModel = require('../model/volunteer_query');

router.get('/', (req, res, next) => {
  volunteerModel.findAllVolunteers()
    .then((data) => {
      res.render('volunteer/volunteer', {
        data: data
      })
    })
});

// need to authorize for login
router.get('/:id', (req, res, next) => {
  volunteerModel.findVolunteerbyID(req.params.id)
  .then((data) => {
    res.render('volunteer/volunteer_single', {
      data: data
    });
  })
});

module.exports = router;
