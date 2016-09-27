'use strict'

const express = require('express');
const router = express.Router();
const eventModel = require('../model/event_query');

// const passport = require('../passport')
// const bcrypt = require('bcrypt');

// const eventModel = require('../model/event_query');
const testModel = require('../model/test_queries');

router.get('/', (req, res, next) => {
  eventModel.findAllEvents()
    .then((data) => {
      res.render('event', {
        data:data
      })
    })
});

router.get('/create', (req, res, next) => {
  res.render('event_create')
})

router.get('/:id/update', (req, res, next) => {
  eventModel.findEventbyID(req.params.id)
    .then((data) => {
      res.render('event_update', {
        data: data
      })
    })
})

router.get('/:id', (req, res, next) => {
  eventModel.findEventbyID(req.params.id)
  .then((data) => {
    res.render('event_single', {
      data:data
    })
  })
});


router.get('/test/searchc', (req, res, next) => {
  testModel.findEventbyCause('International')
    .then((data) => {
      console.log(data);
    })
});

router.get('/test/searchcc', (req, res, next) => {
  testModel.findEventbyCause_City('International', 'Denver')
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
