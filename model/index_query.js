const knex = require('./knex_config.js');

function findOrganizationHashedPassword(orgName){
  return knex('organization')
  .where('organization.user_name',orgName)
  .select('organization.password').first();
}

function findVolunteerHashedPassword(volName){
  return knex('volunteer')
    .where('volunteer.user_name',volName)
    .select('volunteer.password').first();
}

function countOfOrganizationUser(orgName){
  return knex('organization')
    .where('user_name', orgName)
    .count('user_name')
}

function countOfVolunteerUser(volName){
  return knex('volunteer')
    .where('user_name', volName)
    .count('user_name')
}

function addOrganization(orgName){
  return knex('organization').insert(orgName)
}

function addVolunteer(volName){
  return knex('volunteer').insert(volName)
}

module.exports = {
  findOrganizationHashedPassword: findOrganizationHashedPassword,
  findVolunteerHashedPassword: findVolunteerHashedPassword,
  countofOrgUser: countOfOrganizationUser,
  countofVolUser: countOfVolunteerUser,
  addOrganization: addOrganization,
  addVolunteer: addVolunteer,
};
