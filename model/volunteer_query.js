var knex = require('./knex_config.js');

function findAllVolunteers(){
  return knex('volunteer')
  .select(
    'volunteer.id',
    'volunteer.user_name',
    'volunteer.about',
    'volunteer.email',
    'volunteer.phone_number',
    'volunteer.first_name',
    'volunteer.last_name',
    'volunteer.city',
    'volunteer.state'
  )
}

function findVolunteerbyID(id){
  return knex('volunteer').where("id", id)
  .select(
    'volunteer.id',
    'volunteer.user_name',
    'volunteer.about',
    'volunteer.email',
    'volunteer.phone_number',
    'volunteer.first_name',
    'volunteer.last_name',
    'volunteer.city',
    'volunteer.state'
  )
  .first()
}

function filterVolunteerbyCity(city){
  return knex('volunteer').where("city", city)
    .select(
      'volunteer.id',
      'volunteer.user_name',
      'volunteer.city',
      'volunteer.state'
    )
    .first()
}

function filterVolunteerbyCause(selectedCause){
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

function filterVolunteerbyCause_City(selectedCause, selectedCity){
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

function updateVolunteerUser(volID, updatedInfo){
  return knex('volunteer').where('id', volID)
  .update(updatedInfo)
}

function deleteVolunteerUser(volID){
  return knex('volunteer').where('id', volID)
    .del()
}
module.exports = {
  findAllVolunteers: findAllVolunteers,
  findVolunteerbyID: findVolunteerbyID,
  filterVolunteerbyCity: filterVolunteerbyCity,
  filterVolunteerbyCause: filterVolunteerbyCause,
  filterVolunteerbyCause_City: filterVolunteerbyCause_City,
  updateVolunteerUser: updateVolunteerUser,
  deleteVolunteerUser: deleteVolunteerUser
}
