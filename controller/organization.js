'use strict'

const express = require('express')
const router = express.Router()

const organizationModel = require('../model/organization_query')
const eventModel = require('../model/event_query')

router.get('/', (req, res, next) => {
  organizationModel.findAllOrganization()
    .then((data) => {
      res.render('organization/organization', {
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
    res.redirect('/register/organization')
    return
  }
  let orgData = organizationModel.findOrganizationbyID(req.user.id)
  let orgEvents = eventModel.findEventbyOrgID(req.user.id)
  Promise.all([orgData, orgEvents])
    .then((data) => {
      res.render('organization/dashboard_organization', {
        title: 'MEJC',
        orgData:data[0],
        eventData:data[1]
      })
    })
})

router.get('/view/:id', (req, res, next) => {
  let orgData = organizationModel.findOrganizationbyID(req.params.id)
  let orgEvents = eventModel.findEventbyOrgID(req.params.id)

  Promise.all([orgData, orgEvents])
    .then((data) => {
      res.render('organization/organization_single', {
        title: 'MEJC',
        organization: JSON.stringify(data[0]),
        organizationRender: data[0],
        events: data[1]
      })
    })
})

router.get('/profile/new', (req, res, next) => {
  res.render('organization/profile_new_organization', {
    username: req.user.user_name,
  })
})

router.post('/profile/new', (req, res, next) => {
  organizationModel.updateOrganizationUser(req.user.id, req.body)
    .then((data) => {
      res.redirect('/organization/dashboard')
    })
    .catch((err) => {
      console.error('Error caught in inserting into DB')
      next(err)
    })
})

router.get('/profile/update/:id', (req, res, next) => {
  organizationModel.findOrganizationbyID(req.params.id)
    .then((orgData) => {
      res.render('organization/profile_update_organization', {
        orgData: orgData
      })
    })
})

router.post('/profile/update/:id', (req, res, next) => {
  console.log('i got hit')
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    organizationModel.updateOrganizationUser(req.params.id, req.body)
    .then(() => {
      res.redirect('/organization/dashboard')
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

router.get('/username/update/:id', (req, res, next) => {

})

router.post('/username/update/:id', (req, res, next) => {
  // redirect to /event/view/:id
})

router.get('/password/update/:id', (req, res, next) => {

})

router.post('/password/update/:id', (req, res, next) => {
  // redirect to /event/view/:id
})

router.get('/delete/:id', (req, res, next) => {
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    organizationModel.deleteOrganizationUser(req.params.id)
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
    return
  }
})

module.exports = router
