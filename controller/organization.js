'use strict'

const express = require('express');
const router = express.Router();

const organizationModel = require('../model/organization_query');
const eventModel = require('../model/event_query');

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
});

router.get('/:id', (req, res, next) => {
  let orgData = organizationModel.findOrganizationbyID(req.params.id)
  let orgEvents = eventModel.findEventbyOrgID(req.params.id)
  Promise.all([orgData, orgEvents])
    .then((data) => {
      res.render('organization/organization_single', {
        title: 'MEJC',
        organization: JSON.stringify(data[0]),
        organizationRender: data[0],
        events: data[1]
      });
    })
});

router.get('/:id/delete', (req, res, next) => {
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    organizationModel.deleteOrganizationUser(req.params.id)
    .then(() => {
      req.logout();
      res.redirect('/')
    })
    .catch((err) => {
      console.error('Error caught in deleting user from DB')
      next(err)
    })
  } else {
    console.log('CAN\'T DELETE AN ACCOUNT IF YOU\'RE NOT LOGGED IN OR AREN\'T THE USER!!!!');
    return
  }
})

router.get('/:id/profile/update', (req, res, next) => {
  organizationModel.findOrganizationbyID(req.params.id)
    .then((orgData) => {
      res.render('organization/profile_update_organization', {
        orgData: orgData
      });
    })
})

router.post('/:id/profile/update', (req, res, next) => {
  console.log('i got hit');
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    organizationModel.updateOrganizationUser(req.params.id, req.body)
    .then(() => {
      console.log('i got updated!');
      res.redirect('/dashboard/organization')
    })
    .catch((err) => {
      console.error('Error caught in deleting user from DB')
      next(err)
    })
  } else {
    console.log('CAN\'T UPDATE A USER PROFILE ACCOUNT IF YOU\'RE NOT LOGGED IN OR AREN\'T THE USER!!!!');
    return
  }
})

router.get('/test/searchc', (req, res, next) => {
  organizationModel.filterOrganizationbyCity('Pueblo')
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
