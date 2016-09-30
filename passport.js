'use strict'

const bcrypt = require("bcrypt");
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;

const indexModel = require('./model/index_query')
const organizationModel = require('./model/organization_query');
const volunteerModel = require('./model/volunteer_query');
const adminModel = require('./model/admin_query');

passport.use('organization', new LocalStrategy(
  (username, password, done) => {
    organizationModel.findOrganizationData(username)
    .then((userData) => {
      if(userData){
        bcrypt.compare(password, userData.password,
        function(err, res){
          if(res) {
            done(null, userData)
          } else {
            done(null, false)
          }
        })
      }
      else {
        done(null, false)
      }
    })
    .catch(function(err){
      done(err)
    })
  }
))

passport.use('volunteer', new LocalStrategy(
  (username, password, done) => {
    volunteerModel.findVolunteerData(username)
    .then((userData) => {
      if(userData){
        bcrypt.compare(password, userData.password,
        function(err, res){
          if(res) {
            done(null, userData)
          } else {
            done(null, false)
          }
        })
      }
      else {
        done(null, false)
      }
    })
    .catch(function(err){
      done(err)
    })
  }
))

passport.use('admin', new LocalStrategy(
  (username, password, done) => {
    organizationModel.findOrganizationData(username)
    .then((userData) => {
      if(userData){
        bcrypt.compare(password, userData.password,
        function(err, res){
          if(res) {
            done(null, userData)
          } else {
            done(null, false)
          }
        })
      }
      else {
        done(null, false)
      }
    })
    .catch(function(err){
      done(err)
    })
  }
))

passport.serializeUser((userData, done) => {
  done(null, userData)
})

passport.deserializeUser((userData, done) => {
  if (userData.type === 'volunteer' ) {
    volunteerModel.findVolunteerData(userData.user_name)
      .then((userData) => {
        done(null, userData)
      })
      .catch(function(err){
        done(err)
      })
  } else if (userData.type === 'organization' ) {
    organizationModel.findOrganizationData(userData.user_name)
      .then((userData) => {
        done(null, userData)
      })
      .catch(function(err){
        done(err)
      })
  } else {
    adminModel.findAdminData(userData.user_name)
      .then((userData) => {
        done(null, userData)
      })
      .catch(function(err){
        done(err)
      })
  }
})

module.exports = passport
