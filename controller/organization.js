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
    
  }
})


router.get('/test/searchc', (req, res, next) => {
  organizationModel.filterOrganizationbyCity('Pueblo')
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
