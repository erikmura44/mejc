'use strict'

const bcrypt = require("bcrypt");
const passport = require("passport")
// const Local = require("passport-local")
const LocalStrategy = require('passport-local').Strategy;

const indexModel = require('./model/index_query')


// *******************************************************
// use 2 LocalStrategies, registered under volunteer and organization names

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

// *******************************************************

// passport.use(new Local((username, password, done) => {
//   indexModel.findVolunteerData(username)
//   .then((userData) => {
//     if(userData){
//       bcrypt.compare(password, userData.password,
//       function(err, res){
//         if(res) {
//           done(null, userData)
//         } else {
//           done(null, false)
//         }
//       })
//     }
//     else {
//       done(null, false)
//     }
//   })
//   .catch(function(err){
//     done(err)
//   })
// }))
//

passport.serializeUser((userData, done) => {
  done(null, userData.user_name)
})

// // Code to go with LocalStrategy
// passport.serializeUser(function(user, done) {
//   if (isUser(user)) {
//     // serialize user
//   } else if (isCompany(user)) {
//     // serialize company
//   }
// });

// DO YOU NEED TO CREATE ANOTHER ONE FOR ORGANIZATION
// how is deserializeUser connected with the /logout ROUTE?
passport.deserializeUser((username, done) => {
  indexModel.findVolunteerData(username)
  .then((userData) => {
    done(null, userData)
  })
  .catch(function(err){
    done(err)
  })
})

module.exports = passport
