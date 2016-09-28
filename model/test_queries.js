var knex = require('./knex_config.js');

function filterEventbyCity(city){
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

function filterEventbyCause(selectedCause){
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


function filterEventbyCause_City(selectedCause, selectedCity){
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
  filterEventbyCity: filterEventbyCity,
  filterEventbyCause: filterEventbyCause,
  filterEventbyCause_City: filterEventbyCause_City

}
