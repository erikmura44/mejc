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

router.get('/new', (req, res, next) => {
  res.render('event/event_new')
})

router.post('/new', (req, res, next) => {
  eventModel.addEvent(req.body, req.user.id)
    .then(() => {
      res.redirect('/organization/dashboard/' + req.user.id)
    })
})

router.get('/update/:id', (req, res, next) => {
  eventModel.findEventbyID(req.params.id)
    .then((data) => {
      res.render('event/event_update', {
        data: data
      })
    })
})

router.post('/update/:id', (req, res, next) => {
  // redirect to /event/view/:id
})

router.get('/delete/:id', (req, res, next) => {
  // redirect to /organization/dashboard
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
