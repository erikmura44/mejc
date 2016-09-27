var knex = require('./knex_config.js');

function findOrganizationbyCity(city){
  return knex('organization').where("city", city)
}

function findVolunteerbyCity(city){
  return knex('volunteer').where("city", city).first()
}

function findVolunteerbyCause(selectedCause){
  return knex('cause')
  .join('cause_volunteer','cause.id', 'cause_volunteer.cause_id')
  .join('volunteer', 'cause_volunteer.volunteer_id', 'volunteer.id')
  .select (
    'volunteer.id',
    'volunteer.user_name',
    'volunteer.city',
    'cause.name'
  )
  .where('cause.name', selectedCause)
}

function findVolunteerbyCause_City(selectedCause, selectedCity){
  return knex('cause')
  .join('cause_volunteer','cause.id', 'cause_volunteer.cause_id')
  .join('volunteer', 'cause_volunteer.volunteer_id', 'volunteer.id')
  .select (
    'volunteer.id',
    'volunteer.user_name',
    'volunteer.city',
    'cause.name'
  )
  .where('cause.name', selectedCause)
  .where('volunteer.city', selectedCity)
}

function findEventbyCity(city){
  return knex('event').where("city", city).first()
}

function findEventbyCause(selectedCause){
  return knex('cause')
  .join('cause_event','cause.id', 'cause_event.cause_id')
  .join('event', 'cause_event.event_id', 'event.id')
  .select (
    'event.id',
    'event.title',
    'event.city',
    'cause.name'
  )
  .where('cause.name', selectedCause)
}


function findEventbyCause_City(selectedCause, selectedCity){
  return knex('cause')
  .join('cause_event','cause.id', 'cause_event.cause_id')
  .join('event', 'cause_event.event_id', 'event.id')
  .select (
    'event.id',
    'event.title',
    'event.city',
    'cause.name'
  )
  .where('cause.name', selectedCause)
  .where('event.city', selectedCity)
}

module.exports = {
  findOrganizationbyCity: findOrganizationbyCity,

  findVolunteerbyCity: findVolunteerbyCity,
  findVolunteerbyCause: findVolunteerbyCause,
  findVolunteerbyCause_City: findVolunteerbyCause_City,

  findEventbyCity: findEventbyCity,
  findEventbyCause: findEventbyCause,
  findEventbyCause_City: findEventbyCause_City

}
