'use strict'

const express = require('express');
const router = express.Router();

/* GET splash page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEJC' });
});

router.get('/login', (req,res,next) => {
  res.render('login');
});

router.get('/register', (req,res,next) => {
  res.render('register');
});

router.get('/register/organization', (req,res,next) => {
  res.render('register_organization');
});

router.get('/register/volunteer', (req,res,next) => {
  res.render('register_volunteer');
});

module.exports = router;
