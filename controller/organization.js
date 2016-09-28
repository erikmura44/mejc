'use strict'

const express = require('express');
const router = express.Router();

const organizationModel = require('../model/organization_query');

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
  .then((organization) => {
    res.render('organization/organization_single', {
      title: 'MEJC',
      organization: JSON.stringify(organization),
      organizationRender: organization
    });
  })
});

router.get('/test/searchc', (req, res, next) => {
  organizationModel.filterOrganizationbyCity('Pueblo')
    .then((data) => {
      console.log(data);
    })
});

module.exports = router;
