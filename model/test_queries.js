var knex = require('./knex_config.js');

function findVolunteerbyCity(city){
  return knex('volunteer').where("city", city)
    .select(
      'volunteer.id',
      'volunteer.user_name',
      'volunteer.city',
      'volunteer.state'
    )
    .first()
}

function findVolunteerbyCause(selectedCause){
  return knex('cause')
    .join('cause_volunteer','cause.id', 'cause_volunteer.cause_id')
    .join('volunteer', 'cause_volunteer.volunteer_id', 'volunteer.id')
    .select (
      'volunteer.id',
      'volunteer.user_name',
      'volunteer.city',
      'volunteer.state',
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
      'volunteer.state',
      'cause.name'
    )
    .where('cause.name', selectedCause)
    .where('volunteer.city', selectedCity)
}

function findEventbyCity(city){
  return knex('event').where("city", city)
    .select(
      'event.id',
      'event.title',
      'event.location',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time'
    ).first()
}

function findEventbyCause(selectedCause){
  return knex('cause')
    .join('cause_event','cause.id', 'cause_event.cause_id')
    .join('event', 'cause_event.event_id', 'event.id')
    .select (
      'event.id',
      'event.title',
      'event.location',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time'
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
      'event.location',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time',
      'cause.name'
    )
    .where('cause.name', selectedCause)
    .where('event.city', selectedCity)
}

module.exports = {
  findVolunteerbyCity: findVolunteerbyCity,
  findVolunteerbyCause: findVolunteerbyCause,
  findVolunteerbyCause_City: findVolunteerbyCause_City,

  findEventbyCity: findEventbyCity,
  findEventbyCause: findEventbyCause,
  findEventbyCause_City: findEventbyCause_City

}
