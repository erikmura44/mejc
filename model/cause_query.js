var knex = require('./knex_config.js')

function findCausesforVolunteer(volID){
  return knex('cause')
    .join('cause_volunteer','cause.id', 'cause_volunteer.cause_id')
    .join('volunteer', 'cause_volunteer.volunteer_id', 'volunteer.id')
    .where('volunteer.id', volID)
    .select (
      'cause.name'
    )
}

function findCausesforEvents(eventID){
  return knex('cause')
    .join('cause_event','cause.id', 'cause_event.cause_id')
    .join('event', 'cause_event.event_id', 'event.id')
    .where('event.id', eventID)
    .select (
      'cause.name'
    )
}

module.exports = {
  findCausesforVolunteer:findCausesforVolunteer,
  findCausesforEvents: findCausesforEvents
}
