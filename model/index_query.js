/* Find user function is a fulljoin for passport */
var bcrypt = require('bcrypt');
var knex = require('./knex_config.js');

//Volunteer Login
function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

function countOfVolunteerUser(userName){
  return knex('volunteer')
    .count('user_name')
    .where('user_name', userName);
}

function findVolunteerData(username){
  return knex('volunteer')
    .where('user_name',username).first();
}

function findVolunteerHashedPassword(username){
  return knex('volunteer')
    .select('volunteer.password')
    .where('volunteer.user_name',username).first();
}


function addVolunteer(userData){
  return knex('volunteer').insert(userData)
}

//Organization Login
function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

function countOfOrganizationUser(orgName){
  return knex('organization').count('user_name').where('user_name', orgName);
}


function findOrganizationData(username){
  return knex('organization')
    .where('user_name',username).first();
}

function findOrganizationHashedPassword(username){
  return knex('organization').select('organization.password').where('organization.user_name',username).first();
}

function addOrganization(userData){
  return knex('organization').insert(userData)
}

module.exports = {
  findOrganizationData: findOrganizationData,
  findVolunteerData: findVolunteerData,
  findOrganizationHashedPassword: findOrganizationHashedPassword,
  findVolunteerHashedPassword: findVolunteerHashedPassword,
  countofOrgUser: countOfOrganizationUser,
  countofVolUser: countOfVolunteerUser,
  addOrganization: addOrganization,
  addVolunteer: addVolunteer
};
