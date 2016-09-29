'use strict'

const express = require('express');
const router = express.Router();

const volunteerModel = require('../model/volunteer_query');
const testModel = require('../model/test_queries');

router.get('/', (req, res, next) => {
  volunteerModel.findAllVolunteers()
    .then((data) => {
      res.render('volunteer/volunteer', {
        data: data
      })
    })
});

router.get('/:id', (req, res, next) => {
  volunteerModel.findVolunteerbyID(req.params.id)
  .then(function(volunteer){
    res.render('volunteer/volunteer_single', {
      title: 'MEJC',
      volunteer: JSON.stringify(volunteer),
      volunteerRender: volunteer
    });
  })
});

router.get('/:id/profile/update', (req, res, next) => {
  volunteerModel.findVolunteerbyID(req.params.id)
    .then((volData) => {
      res.render('volunteer/profile_update_volunteer', {
        volData: volData
      });
    })
})

router.post('/:id/profile/update', (req, res, next) => {
  console.log('i got hit');
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    volunteerModel.updateVolunteerUser(req.params.id, req.body)
    .then(() => {
      res.redirect('/dashboard/volunteer')
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

router.get('/:id/delete', (req, res, next) => {
  if(req.isAuthenticated() && req.user.id === parseInt(req.params.id)){
    volunteerModel.deleteVolunteerUser(req.params.id)
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

router.get('/test/searchc', (req, res, next) => {
  testModel.filterVolunteerbyCause('LGBTQIA')
  .then((data) => {
    console.log(data);
  })
});

router.get('/test/searchcc', (req, res, next) => {
  testModel.filterVolunteerbyCause_City('LGBTQIA', 'Pueblo')
  .then((data) => {
    console.log(data);
  })
});


module.exports = router;
