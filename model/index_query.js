const knex = require('./knex_config.js');

function findOrganizationData(orgName){
  return knex('organization')
  .where('user_name',orgName).first();
}

function findVolunteerData(volName){
  return knex('volunteer')
    .where('user_name',volName).first();
}

function findOrganizationHashedPassword(orgName){
  return knex('organization')
  .select('organization.password')
  .where('organization.user_name',orgName).first();
}

function findVolunteerHashedPassword(volName){
  return knex('volunteer')
    .select('volunteer.password')
    .where('volunteer.user_name',volName).first();
}

function countOfOrganizationUser(orgName){
  return knex('organization')
    .count('user_name')
    .where('user_name', orgName);
}

function countOfVolunteerUser(volName){
  return knex('volunteer')
    .count('user_name')
    .where('user_name', volName);
}

function addOrganization(orgName){
  return knex('organization').insert(orgName)
}

function addVolunteer(volName){
  return knex('volunteer').insert(volName)
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
