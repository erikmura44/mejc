const knex = require('./knex_config.js')

function findAllEvents(){
  return knex('event')
}

function findEventbyID(id){
  return knex('event').where("id", id).first()
}

function findEventbyOrgID(orgID){
  return knex('event').where('organization_id', orgID)
}

function findEventbyVolID(volID){
  return knex('event')
    .join('event_volunteer','event.id', 'event_volunteer.event_id')
    .join('volunteer', 'event_volunteer.volunteer_id', 'volunteer.id')
    .where('volunteer.id', volID)
    .select (
      'event.id',
      'event.title',
      'event.city',
      'event.state',
      'event.start_date',
      'event.start_time'
    )
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

// is this needed? If so needs to be tested
function findHostIDOfEvent(eventID){
  return knex('event').where('id', eventID)
    .select(
      'event.organization_id',
      'event.id'
    )
}

function updateEvent(eventID, orgID, updatedInfo){
  return knex('event').where('id', eventID)
    .update({
      title: updatedInfo.title,
      location: updatedInfo.location,
      street: updatedInfo.street,
      city: updatedInfo.city,
      state: updatedInfo.state,
      zip: updatedInfo.zip,
      start_date: updatedInfo.start_date,
      end_date: updatedInfo.end_date,
      start_time: updatedInfo.start_time,
      end_time: updatedInfo.end_time,
      available_positions: updatedInfo.available_positions,
      registered_volunteers: 0,
      description: updatedInfo.description,
      organization_id: orgID
    })
}

function deleteEvent(eventID){
  return knex('event').where('id', eventID)
  .del()
}

function registerVolforEvent(eventID, userID) {
  return knex('event_volunteer')
      .join('event', 'event_volunteer.event_id', 'event.id')
      .insert({
        event_id: eventID,
        volunteer_id: userID
      })
}

//this needs to be tested
function unregisterVolfromEvent(eventID, userID) {
  return knex('event').where('id', eventID).del()
}


module.exports = {
  findAllEvents: findAllEvents,
  findEventbyID: findEventbyID,
  findEventbyOrgID: findEventbyOrgID,
  findEventbyVolID: findEventbyVolID,
  addEvent: addEvent,
  updateEvent: updateEvent,
  deleteEvent: deleteEvent,
  registerVolforEvent: registerVolforEvent,
  unregisterVolfromEvent: unregisterVolfromEvent
}
