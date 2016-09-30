'use strict'

const express = require('express')
const router = express.Router()

const volunteerModel = require('../model/volunteer_query')
const eventModel = require('../model/event_query')

router.get('/', (req, res, next) => {
  volunteerModel.findAllVolunteers()
    .then((data) => {
      res.render('volunteer/volunteer', {
        data: data
      })
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
})

router.get('/dashboard', (req, res, next)=>{
  if (!req.isAuthenticated()){
    res.redirect('/login/volunteer')
  } else if (req.user.type !== 'volunteer') {
    res.redirect('/organization/dashboard')
  } else {
    let volData  = volunteerModel.findVolunteerbyID(req.user.id)
    let volEvents = eventModel.findEventbyVolID(req.user.id)
    Promise.all([volData, volEvents])
    .then((data) => {
      res.render('volunteer/dashboard_volunteer', {
        title: 'iVolunteer',
        volData:data[0],
        eventData:data[1]
      })
    })
    .catch((err) => {
      console.error('Error caught in deleting post from DB')
      next(err)
    })
  }
})

router.get('/view/:id', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/login')
  }
  let volInfo = volunteerModel.findVolunteerbyID(req.params.id)
  let causeTags = volunteerModel.findVolunteerCauses(req.params.id)
  Promise.all([volInfo, causeTags])
  .then((volData) => {
    res.render('volunteer/volunteer_single', {
      title: 'iVolunteer',
      volunteer: JSON.stringify(volData[0]),
      volunteerRender: volData[0],
      volCauseRender: volData[1]
    })
  })
  .catch((err) => {
    console.error('Error caught in deleting post from DB')
    next(err)
  })

  // .then(function(volunteer){
  //   res.render('volunteer/volunteer_single', {
  //     title: 'iVolunteer',
  //     volunteer: JSON.stringify(volunteer),
  //     volunteerRender: volunteer
  //   })
  // })
  // .catch((err) => {
  //   console.error('Error caught in deleting post from DB')
  //   next(err)
  // })
})

router.get('/profile/new', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'volunteer') {
    res.redirect('/login/volunteer')
  }
  res.render('volunteer/profile_new_volunteer', {
    username: req.user.user_name
  })
})

router.post('/profile/new', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'volunteer') {
    res.redirect('/login/volunteer')
  }
  volunteerModel.updateVolunteerInfo(req.user.user_name, req.body)
    .then((data) => {
      res.redirect('/volunteer/dashboard')
    })
    .catch((err) => {
      console.error('Error caught in inserting into DB')
      next(err)
    })
})

router.get('/profile/update/:id', (req, res, next) => {
  if (!req.isAuthenticated() || req.user.type !== 'volunteer') {
    res.redirect('/login/volunteer')
  } else if (req.user.id !== parseInt(req.params.id)){
    res.redirect('/volunteer/dashboard')
  } else {
    volunteerModel.findVolunteerbyID(req.params.id)
    .then((volData) => {
      res.render('volunteer/profile_update_volunteer', {
        volData: volData
      })
    })
    .catch((err) => {
      console.error('Error caught in inserting into DB')
      next(err)
    })
  }
})

router.post('/profile/update/:id', (req, res, next) => {
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    volunteerModel.updateVolunteerUser(req.params.id, req.body)
    .then(() => {
      res.redirect('/volunteer/dashboard')
    })
    .catch((err) => {
      console.error('Error caught in deleting user from DB')
      next(err)
    })
  } else {
    console.log('CAN\'T UPDATE A USER PROFILE ACCOUNT IF YOU\'RE NOT LOGGED IN OR AREN\'T THE USER!!!!')
    return
  }
})

// BUILD THIS OUT  *************************************************************
router.get('/username/update/:id', (req, res, next) => {

})

// BUILD THIS OUT  *************************************************************
router.post('/username/update/:id', (req, res, next) => {
  // redirect to /event/view/:id
})

// BUILD THIS OUT  *************************************************************
router.get('/password/update/:id', (req, res, next) => {

})

// BUILD THIS OUT  *************************************************************
router.post('/password/update/:id', (req, res, next) => {
  // redirect to /event/view/:id
})

router.get('/delete/:id', (req, res, next) => {
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    volunteerModel.deleteVolunteerUser(req.params.id)
    .then(() => {
      req.logout()
      res.redirect('/')
    })
    .catch((err) => {
      console.error('Error caught in deleting user from DB')
      next(err)
    })
  } else {
    console.log('CAN\'T DELETE AN ACCOUNT IF YOU\'RE NOT LOGGED IN OR AREN\'T THE USER!!!!')
  }
})

module.exports = router
