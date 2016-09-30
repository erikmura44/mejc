'use strict'

const express = require('express')
const router = express.Router()

const passport = require('../passport')
const bcrypt = require('bcrypt')

const indexModel = require('../model/index_query')

router.get('/', (req, res, next) => {
  res.render('index/index', { title: 'iVolunteer' })
})

router.get('/register', (req,res,next) => {
  res.render('index/register')
})

router.get('/register/organization', (req,res,next) => {
  res.render('index/register_organization')
})

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
              res.redirect('/organization/profile/new')
            })
          })
          .catch((err) => {
            res.render('error', {message: 'error in inserting user data into database'})
          })
      }
    })
})

router.get('/register/volunteer', (req,res,next) => {
  res.render('index/register_volunteer')
})

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
              res.redirect('/volunteer/profile/new')
            })
          })
          .catch((err) => {
            res.render('error', {message: 'error in inserting user data into database'})
          })
      }
    })
})

router.get('/login', (req,res,next)=>{
  res.render('index/login')
})

router.get('/login/organization', (req,res,next) => {
  res.render('index/login_organization')
})

router.post('/login/organization', passport.authenticate('organization', {
  successRedirect:'/organization/dashboard',
  failureRedirect:'/login/organization'
}))

router.get('/login/volunteer', (req,res,next) => {
  res.render('index/login_volunteer')
})
router.post('/login/volunteer', passport.authenticate('volunteer', {
  successRedirect:'/volunteer/dashboard',
  failureRedirect:'/login/volunteer'
}))

router.get('/logout', (req,res,next) => {
  if(req.isAuthenticated()){
    req.logout()
    res.redirect('/')
  }
})

module.exports = router
