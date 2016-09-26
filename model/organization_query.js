var knex = require('./knex_config.js');

function findAllOrganization(){
  return knex('organization')
}

function findOrganizationbyID(id){
  return knex('organization').where("id", id).first()
}

module.exports = {
  findAllOrganization: findAllOrganization,
  findOrganizationbyID: findOrganizationbyID
}
