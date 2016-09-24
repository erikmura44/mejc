exports.up = function(knex, Promise) {
  return knex.schema.createTable('interest_volunteer', function(table) {
    table.integer('interest_id')
      .references('interest.id')
      .onDelete('CASCADE');
    table.integer('volunteer_id')
      .references('volunteer.id')
      .onDelete('CASCADE');
    // table.refenence skills foreign
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('interest_volunteer')
};
