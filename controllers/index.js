'use strict'

const express = require('express');
const router = express.Router();
const indexModel = require('../models/index_query')

/* GET splash page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEJC' });
});

router.get('/login/volunteer', (req,res,next) => {
  res.render('login');
});

router.post('/login/volunteer', passport.authenticateVolunteer('local', {
  successRedirect:'/volunteer/dashboard',
  failureRedirect:'/login/volunteer'
}));

router.get('/login/organization', (req,res,next) => {
  res.render('login');
});

router.post('/login/organization', passport.authenticateOrganization('local', {
  successRedirect:'/organization/dashboard',
  failureRedirect:'/login/organization'
}));

router.get('/logout', (req,res,next) => {
  if(req.isAuthenticated()){
    req.logout();
    res.redirect('/')
  }
});


router.get('/register', (req,res,next) => {
  res.render('register');
});

router.get('/register/organization', (req,res,next) => {
  res.render('register_organization');
});

router.post('/register/organization', (req, res, next) => {
  
})

router.get('/register/volunteer', (req,res,next) => {
  res.render('register_volunteer');
});

module.exports = router;
