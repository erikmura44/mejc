'use strict'

const express = require('express')
const router = express.Router()

const eventModel = require('../model/event_query')
// const testModel = require('../model/test_queries')

router.get('/', (req, res, next) => {
  eventModel.findAllEvents()
    .then((data) => {
      res.render('event/event', {
        data:data
      })
    })
})

router.get('/view/:id', (req, res, next) => {
  eventModel.findEventbyID(req.params.id)
  .then(function(events){
    res.render('event/event_single', {
      title: 'MEJC',
      events: JSON.stringify(events),
      eventsRender: events
    })
  })
})

router.get('/register/:id', (req, res, next) => {
  eventModel.addNewVolunteer(req.params.id, req.user.id)
})

router.get('/new', (req, res, next) => {
  res.render('event/event_new')
})

router.post('/new', (req, res, next) => {
  eventModel.addEvent(req.body, req.user.id)
    .then(() => {
      res.redirect('/organization/dashboard/')
    })
})

router.get('/update/:id', (req, res, next) => {
  eventModel.findEventbyID(req.params.id)
    .then((data) => { // arg name may change
      res.render('event/event_update', {
        data: data
      })
    })
})

router.post('/update/:id', (req, res, next) => {
  eventModel.updateEvent(req.params.id, req.user.id, req.body)
    .then(() => { // arg name may change
      res.redirect('/organization/dashboard')
    })
})

//THIS DOESN'T WORK
router.get('/delete/:id', (req, res, next) => {
  eventModel.findHostIDOfEvent(req.params.id)
    .then((eventData) => {
      if (eventData.organization_id === req.user.id){
        eventModel.deleteEvent(eventData.id)
      }
      return // is this needed?
    })
    .then(() => {
      res.redirect('/organization/dashboard')
    })
})

// router.get('/test/searchc', (req, res, next) => {
//   testModel.filterEventbyCause('International')
//     .then((data) => {
//       console.log(data)
//     })
// })
//
// router.get('/test/searchcc', (req, res, next) => {
//   testModel.filterEventbyCause_City('International', 'Denver')
//     .then((data) => {
//       console.log(data)
//     })
// })

module.exports = router
