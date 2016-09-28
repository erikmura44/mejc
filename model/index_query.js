const knex = require('./knex_config.js');

// *********** SHOULD WE RESTRICT THE USER DATA RETURNED? ********//
function findOrganizationData(orgName){
  return knex('organization')
  .where('user_name',orgName).first()
  .then((userData) => {
    if (typeof userData === 'undefined') {
      return
    } else {
      userData.type = 'organization'
      return userData
    }
  })
}

function findVolunteerData(volName){
  return knex('volunteer')
    .where('user_name',volName).first()
    .then((userData) => {
      if (typeof userData === 'undefined') {
        return
      } else {
        userData.type = 'volunteer'
        return userData
      }
    })
}
// *********************************************************//

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
  findOrganizationData: findOrganizationData,
  findVolunteerData: findVolunteerData,
  findOrganizationHashedPassword: findOrganizationHashedPassword,
  findVolunteerHashedPassword: findVolunteerHashedPassword,
  countofOrgUser: countOfOrganizationUser,
  countofVolUser: countOfVolunteerUser,
  addOrganization: addOrganization,
  addVolunteer: addVolunteer
};
