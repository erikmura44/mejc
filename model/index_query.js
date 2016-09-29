const knex = require('./knex_config.js')

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
  countofOrgUser: countOfOrganizationUser,
  countofVolUser: countOfVolunteerUser,
  addOrganization: addOrganization,
  addVolunteer: addVolunteer,
}
