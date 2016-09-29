const knex = require('./knex_config.js')

// *********** SHOULD WE RESTRICT THE USER DATA RETURNED? ********//
function findVolunteerbyID(id){
  return knex('volunteer').where("id", id).first()
}

module.exports = {
  findVolunteerbyID: findVolunteerbyID
}
