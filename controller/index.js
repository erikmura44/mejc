'use strict'

const express = require('express');
const router = express.Router();

const passport = require('../passport')
const bcrypt = require('bcrypt')

const indexModel = require('../model/index_query');


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
  indexModel.countofOrgUser(req.body.username)
    .then((num) => {
      if (parseInt(num[0].count) > 0){
        res.render('error', {message: 'Username is taken.'})
      } else {
        let userData = {
          user_name: req.body.username,
          password: bcrypt.hashSync(req.body.password, 8),
          email: req.body.email
        }
        indexModel.addOrganization(userData)
          .then(() =>{
            userData.type = 'organization'
            req.logIn(userData, (err) => {
              if (err) { return next(err) }
              res.redirect('/profile/organization')
            })
          })
          .catch((err) => {
            res.render('error', {message: 'error in inserting user data into database'})
          })
      }
    })
})

router.get('/register/volunteer', (req,res,next) => {
  res.render('index/register_volunteer');
});

router.post('/register/volunteer', (req, res, next) => {
  indexModel.countofVolUser(req.body.username)
    .then((num) => {
      if (parseInt(num[0].count) > 0){
        res.render('error', {message: 'Username is taken.'})
      } else {
        let userData = {
          user_name: req.body.username,
          password: bcrypt.hashSync(req.body.password, 8),
          email: req.body.email
        }
        indexModel.addVolunteer(userData)
          .then(() =>{
            userData.type = 'volunteer'
            req.logIn(userData, (err) => {
              if (err) { return next(err) }
              res.redirect('/profile/volunteer')
            })
          })
          .catch((err) => {
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

router.post('/login/organization', passport.authenticate('organization', {
  successRedirect:'/dashboard/organization',
  failureRedirect:'/register/organization'
}));

router.post('/login/volunteer', passport.authenticate('volunteer', {
  successRedirect:'/dashboard/volunteer',
  failureRedirect:'/login/volunteer'
}));

router.get('/profile/volunteer', (req, res, next) => {
  res.render('volunteer/profile_new_volunteer', {
    username: req.user.user_name
  })
})

router.post('/profile/volunteer', (req, res, next) => {
  indexModel.updateVolunteerInfo(req.user.user_name, req.body)
    .then((data) => {
      res.redirect('/dashboard/volunteer')
    })
    .catch((err) => {
      console.error('Error caught in inserting into DB')
      next(err)
    })
})

router.get('/profile/organization', (req, res, next) => {
  res.render('organization/profile_new_organization', {
    username: req.user.user_name,
  })
})

router.post('/profile/organization', (req, res, next) => {
  indexModel.addedOrganizationInfo(req.user.user_name, req.body)
    .then((data) => {
      res.redirect('/dashboard/organization')
    })
    .catch((err) => {
      console.error('Error caught in inserting into DB')
      next(err)
    })
})


router.get('/dashboard/organization', (req, res, next)=>{
  if (!req.isAuthenticated()){
    res.redirect('/register/organization');
    return;
  }
  indexModel.findOrganizationData(req.user.user_name)
    .then((data) => {
      res.render('organization/dashboard_organization', {
        data:data
      })
    })
});

router.get('/dashboard/volunteer', (req, res, next)=>{
  if (!req.isAuthenticated()){
    res.redirect('/login/volunteer');
    return;
  }
  indexModel.findVolunteerData(req.user.user_name)
    .then((data) => {
    res.render('volunteer/dashboard_volunteer', {
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
