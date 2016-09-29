exports.up = function(knex, Promise) {
  return knex.schema.createTable('cause_event', function(table) {
    table.integer('cause_id')
      .references('cause.id')
      .onDelete('CASCADE');
    table.integer('event_id')
      .references('event.id')
      .onDelete('CASCADE');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cause_event')
}
