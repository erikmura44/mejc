'use strict'

const express = require('express');
const router = express.Router();

const passport = require('../passport')
const bcrypt = require('bcrypt')

const indexModel = require('../model/index_query');
const volunteerModel = require('../model/volunteer_query');
const organizationModel = require('../model/organization_query');


/* GET splash page. */
router.get('/', (req, res, next) => {
  res.render('index/index', { title: 'MEJC' });
});

router.get('/register', (req,res,next) => {
  res.render('index/register');
});

router.get('/register/organization', (req,res,next) => {
  res.render('index/register_organization');
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

router.get('/register/volunteer', (req,res,next) => {
  res.render('index/register_volunteer');
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

router.get('/login', (req,res,next)=>{
  res.render('index/login');
});

router.get('/login/organization', (req,res,next) => {
  res.render('index/login_organization');
});

router.get('/login/volunteer', (req,res,next) => {
  res.render('index/login_volunteer');
});


//**********this doesn't work still!!!!!!!!**********
router.post('/login/organization', passport.authenticate('organization', {
  successRedirect:'/dashboard/organization',
  failureRedirect:'/register/organization'
}));
//****************************************************


router.post('/login/volunteer', passport.authenticate('volunteer', {
  successRedirect:'/dashboard/volunteer',
  failureRedirect:'/login/volunteer'
}));

// NEED TO FLESH OUT - partially completed; don't work
router.get('/dashboard/organization', (req, res, next)=>{
  if (!req.isAuthenticated()){
    res.redirect('/register/organization');
    return;
  }
  indexModel.findOrganizationbyID(id)
  .then((data) => {
    res.render('index/dashboard_organization', {
      data:data
    })
  })
});

router.get('/dashboard/volunteer', (req, res, next)=>{
  if (!req.isAuthenticated()){
    res.redirect('/login/volunteer');
    return;
  }
  volunteerModel.findVolunteerbyID(req.user.id)
  .then((data) => {
    res.render('index/dashboard_volunteer', {
      data:data
    })
  })
});

router.get('/logout', (req,res,next) => {
  if(req.isAuthenticated()){
    req.logout();
    res.redirect('/')
  }
});

module.exports = router;
