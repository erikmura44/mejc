'use strict'

const express = require('express')
const router = express.Router()

const eventModel = require('../model/event_query')

router.get('/', (req, res, next) => {
  eventModel.findAllEvents()
    .then((data) => {
      res.render('event/event', {
        data:data
      })
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
})

router.get('/view/:id', (req, res, next) => {
  eventModel.findEventbyID(req.params.id)
  .then(function(events){
    res.render('event/event_single', {
      title: 'iVolunteer',
      events: JSON.stringify(events),
      eventsRender: events
    })
  })
  .catch((err) => {
    console.error('Error caught in deleting post from DB')
    next(err)
  })
})

router.get('/new', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'organization') {
    res.redirect('/login/organization')
  }
  res.render('event/event_new')
})

router.post('/new', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'organization') {
    res.redirect('/login/organization')
  }
  eventModel.addEvent(req.body, req.user.id)
    .then(() => {
      res.redirect('/organization/dashboard/')
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
})

// RESTRICT TO PER req.user.id  ************************************************
router.get('/update/:id', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'organization') {
    res.redirect('/login/organization')
  } else {
  eventModel.findEventbyID(req.params.id)
    .then((data) => { // arg name may change
      res.render('event/event_update', {
        data: data
      })
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
  }
})

// RESTRICT TO PER req.user.id  ************************************************
router.post('/update/:id', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'organization') {
    res.redirect('/login/organization')
  } else {
    eventModel.updateEvent(req.params.id, req.user.id, req.body)
    .then(() => { // arg name may change
      res.redirect('/organization/dashboard')
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
  }
})

// RESTRICT TO ONLY ONE REGISTRATION  ******************************************
router.get('/register/:id', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'volunteer') {
    res.redirect('/login/volunteer')
  } else {
  eventModel.registerVolforEvent(parseInt(req.params.id), req.user.id)
    .then((data)=>{
      console.log('User is registered for event id #' + req.params.id)
      // res.redirect('/event/view/' + req.params.id)
      return
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
  }
})

// BUILD THIS OUT  *************************************************************
router.get('/unregister/:id', (req, res, next) => {
  eventModel.unregisterVolfromEvent(req.params.id, req.user.id)
    .then((data)=>{
      console.log(data)
      // res.redirect('/event')
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
})

// RESTRICT TO PER OWNER OF EVENT **********************************************
router.get('/delete/:id', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'organization') {
    res.redirect('/login/organization')
  } else {
    eventModel.deleteEvent(req.params.id)
    .then(() => {
      res.redirect('/organization/dashboard')
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
  }
})

// //THIS DOESN'T WORK
// router.get('/delete/:id', (req, res, next) => {
//   eventModel.findHostIDOfEvent(req.params.id)
//     .then((eventData) => {p[]
//       if (eventData.organization_id === req.user.id){
//         eventModel.deleteEvent(eventData.id)
//     })
//     .then(() => {
//       res.redirect('/organization/dashboard')
//     })
// })

module.exports = router
