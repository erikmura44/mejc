'use strict'

const express = require('express');
const router = express.Router();

const eventModel = require('../model/event_query');
const testModel = require('../model/test_queries');

router.get('/', (req, res, next) => {
  eventModel.findAllEvents()
    .then((data) => {
      res.render('event', {
        data:data
      })
    })
});

router.get('/new', (req, res, next) => {
  res.render('event_new')
})

router.post('/new', (req, res, next) => {
  eventModel.addEvent(req.body, req.user.id)
    .then(() => {
      res.redirect('/dashboard/organization')
    })
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
  .then(function(events){
    res.render('event_single', {
      title: 'MEJC',
      events: JSON.stringify(events),
      eventsRender: events
    });
  })
});

router.get('/test/searchc', (req, res, next) => {
  testModel.filterEventbyCause('International')
    .then((data) => {
      console.log(data);
    })
});

router.get('/test/searchcc', (req, res, next) => {
  testModel.filterEventbyCause_City('International', 'Denver')
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
