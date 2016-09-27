exports.up = function(knex, Promise) {
  return knex.schema.createTable('cause_volunteer', function(table) {
    table.integer('cause_id')
      .references('cause.id')
      .onDelete('CASCADE');
    table.integer('volunteer_id')
      .references('volunteer.id')
      .onDelete('CASCADE');
    // table.refenence skills foreign
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cause_volunteer')
};
