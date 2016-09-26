'use strict'

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const router = express.Router();
const indexModel = require('../models/index_query');


/* GET splash page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MEJC' });
});

router.get('/login', (req,res,next)=>{
  res.render('login');
});

router.get('/login/volunteer', (req,res,next) => {
  res.render('login_volunteer');
});

router.post('/login/volunteer', passport.authenticate('local', {
  successRedirect:'/volunteer/dashboard',
  failureRedirect:'/login/volunteer'
}));

router.get('/login/organization', (req,res,next) => {
  res.render('login_organization');
});

router.post('/login/organization', passport.authenticate('local', {
  successRedirect:'/organization/dashboard',
  failureRedirect:'/login/organization'
}));

router.get('/register', (req,res,next) => {
  res.render('register');
});

router.get('/register/volunteer', (req,res,next) => {
  res.render('register_volunteer');
});

router.post('/register/volunteer', (req, res, next) => {
  indexModel.countofVolUser(req.body.user_name)
    .then((num) => {
      console.log('num is: ', num, 'num.count is: ', num[0].count)
      if (parseInt(num[0].count) > 0){
        res.render('error', {message: 'Username is taken.'})
      } else {
        let userData = {
          user_name: req.body.user_name,
          password: bcrypt.hashSync(req.body.password, 8),      // passwords are never stored in plain text
          email: req.body.email
        }
        indexModel.addVolunteer(userData)
          .then(() =>{
            res.redirect('/login/volunteer')
          })
          .catch((err) => {
            console.log(err)
            res.render('error', {message: 'error in inserting user data into database'})
          })
      }
    })
})

router.get('/register/organization', (req,res,next) => {
  res.render('register_organization');
});

router.post('/register/organization', (req, res, next) => {
  indexModel.countofOrgUser(req.body.user_name)
    .then((num) => {
      console.log('num is: ', num, 'num.count is: ', num[0].count)
      if (parseInt(num[0].count) > 0){
        res.render('error', {message: 'Username is taken.'})
      } else {
        let userData = {
          user_name: req.body.user_name,
          password: bcrypt.hashSync(req.body.password, 8),      // passwords are never stored in plain text
          email: req.body.email
        }
        indexModel.addOrganization(userData)
          .then(() =>{
            res.redirect('/login/organization')
          })
          .catch((err) => {
            console.log(err)
            res.render('error', {message: 'error in inserting user data into database'})
          })
      }
    })
})

router.get('/logout', (req,res,next) => {
  if(req.isAuthenticated()){
    req.logout();
    res.redirect('/')
  }
});


module.exports = router;
