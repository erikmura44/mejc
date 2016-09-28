'use strict'

const bcrypt = require("bcrypt");
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;

const indexModel = require('./model/index_query')

passport.use('organization', new LocalStrategy(
  (username, password, done) => {
    indexModel.findOrganizationData(username)
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
));

passport.use('volunteer', new LocalStrategy(
  (username, password, done) => {
    indexModel.findVolunteerData(username)
    .then((userData) => {
      // console.log(userData);
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
));

passport.serializeUser((userData, done) => {
  done(null, userData)
})

passport.deserializeUser((userdata, done) => {
  if (userdata.type === 'volunteer' ){
    indexModel.findVolunteerData(userdata.user_name)
      .then((userData) => {
        done(null, userData)
      })
      .catch(function(err){
        done(err)
      })
  } else {
    indexModel.findOrganizationData(userdata.user_name)
      .then((userData) => {
        done(null, userData)
      })
      .catch(function(err){
        done(err)
      })
    }
})

module.exports = passport
