'use strict'

const express = require('express');
const router = express.Router();
const eventModel = require('../model/event_query');

// const passport = require('../passport')
// const bcrypt = require('bcrypt');

// const eventModel = require('../model/event_query');

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

router.get('/update', (req, res, next) => {
  eventModel.findAllEvents()
    .then((data) => {
      res.render('event_update', {
        data: data[0]
      })
    })
})

router.get('/:id', (req, res, next) => {
  res.render('event_single');
});


module.exports = router;
