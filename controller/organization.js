'use strict'

const express = require('express');
const router = express.Router();

const organizationModel = require('../model/organization_query');
const testModel = require('../model/test_queries');

router.get('/', (req, res, next) => {
  organizationModel.findAllOrganization()
    .then((data) => {
      res.render('organization/organization', {
        data: data
      })
    })
});

router.get('/:id', (req, res, next) => {
  organizationModel.findOrganizationbyID(req.params.id)
  .then((data) => {
    res.render('organization/organization_single', {
      data: data
    });
  })
});

router.get('/test/searchc', (req, res, next) => {
  testModel.findOrganizationbyCity('Pueblo')
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
