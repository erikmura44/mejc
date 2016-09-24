exports.up = function(knex, Promise) {
  return knex.schema.createTable('interest_event', function(table) {
    table.integer('interest_id')
      .references('interest.id')
      .onDelete('CASCADE');
    table.integer('event_id')
      .references('event.id')
      .onDelete('CASCADE');
    // table.refenence skills foreign
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('interest_event')
};
