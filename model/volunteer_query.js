var bcrypt = require('bcrypt');
var knex = require('./knex_config.js');


function findAllVolunteers(){
  return knex('volunteer')
}

module.exports = {
  findAllVolunteers: findAllVolunteers
}
