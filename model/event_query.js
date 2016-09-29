var knex = require('./knex_config.js');

function findAllEvents(){
  return knex('event')
}

function findEventbyID(id){
  return knex('event').where("id", id).first()
}

function findEventbyOrgID(orgID){
  return knex('event').where("event.organization_id", orgID)
}

module.exports = {
  findAllEvents: findAllEvents,
  findEventbyID: findEventbyID,
  findEventbyOrgID: findEventbyOrgID
}
