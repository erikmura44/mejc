exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_volunteer', function(table) {
    table.integer('event_id')
      .references('event.id')
      .onDelete('CASCADE');

    table.integer('volunteer_id')
      .references('volunteer.id')
      .onDelete('CASCADE');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event_volunteer')
}
