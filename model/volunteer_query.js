var knex = require('./knex_config.js');

function findAllVolunteers(){
  return knex('volunteer')
}

function findVolunteerbyID(id){
  return knex('volunteer').where("id", id).first()
}


module.exports = {
  findAllVolunteers: findAllVolunteers,
  findVolunteerbyID: findVolunteerbyID
}
