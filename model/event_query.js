var knex = require('./knex_config.js')

function findAllEvents(){
  return knex('event')
}

function findEventbyID(id){
  return knex('event').where("id", id).first()
}

function findEventbyOrgID(orgID){
  return knex('event').where("event.organization_id", orgID)
}

function findEventbyVolID(volID){
  return knex('event').where("event.registered_volunteers", volID)
}

function addEvent(eventInfo, orgID){
  return knex('event')
    .insert({
      title: eventInfo.title,
      location: eventInfo.location,
      street: eventInfo.street,
      city: eventInfo.city,
      state: eventInfo.state,
      zip: eventInfo.zip,
      start_date: eventInfo.start_date,
      end_date: eventInfo.end_date,
      start_time: eventInfo.start_time,
      end_time: eventInfo.end_time,
      available_positions: eventInfo.available_positions,
      registered_volunteers: 0,
      description: eventInfo.description,
      organization_id: orgID
    })
}

module.exports = {
  findAllEvents: findAllEvents,
  findEventbyID: findEventbyID,
  findEventbyOrgID: findEventbyOrgID,
  findEventbyVolID: findEventbyVolID,
  addEvent: addEvent
}
