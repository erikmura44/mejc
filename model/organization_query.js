var knex = require('./knex_config.js');

// ************ FUNCTIONS NOT BEING USED ********//
function findAllOrganization(){
  return knex('organization')
  .select(
    'organization.id',
    'organization.organization_name',
    'organization.city',
    'organization.state'
  )
}

function findOrganizationbyID(id){
  return knex('organization')
    .where("id", id)
    .select(
      'organization.id',
      'organization.user_name',
      'organization.organization_name',
      'organization.about',
      'organization.website',
      'organization.email',
      'organization.phone_number',
      'organization.contact',
      'organization.street',
      'organization.city',
      'organization.state',
      'organization.zip'
    )
    .first()
}

function findOrganizationID(orgName){
  return knex('organization')
    .where("user_name", orgName)
    .select('organization.id')
    .first()
}

function filterOrganizationbyCity(city){
  return knex('organization').where("city", city)
    .select(
      'organization.id',
      'organization.organization_name',
      'organization.city',
      'organization.state'
    )
}


module.exports = {
  findAllOrganization: findAllOrganization,
  findOrganizationbyID: findOrganizationbyID,
  filterOrganizationbyCity: filterOrganizationbyCity,
}
