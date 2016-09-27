const knex = require('./knex_config.js');


function findVolunteerbyID(id){
  return knex('volunteer').where("id", id).first()
}

module.exports = {
  findVolunteerbyID: findVolunteerbyID
}
