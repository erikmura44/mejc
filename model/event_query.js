var knex = require('./knex_config.js');

function findAllEvents(){
  return knex('event')
}

function findEventbyID(id){
  return knex('event').where("id", id).first()
}

module.exports = {
  findAllEvents: findAllEvents,
  findEventbyID: findEventbyID
}
