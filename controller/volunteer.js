'use strict'

const express = require('express');
const router = express.Router();

// const passport = require('../passport')
// const bcrypt = require('bcrypt');

const volunteerModel = require('../model/volunteer_query');
const testModel = require('../model/test_queries');


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

router.get('/test/searchc', (req, res, next) => {
  testModel.findVolunteerbyCause('LGBTQIA')
  .then((data) => {
    console.log(data);
  })
});

router.get('/test/searchcc', (req, res, next) => {
  testModel.findVolunteerbyCause_City('LGBTQIA', 'Pueblo')
  .then((data) => {
    console.log(data);
  })
});


module.exports = router;
