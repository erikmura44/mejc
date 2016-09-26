exports.up = function(knex, Promise) {
  return knex.schema.createTable('volunteer', function(table) {
    table.increments('id').primary();
    table.string('user_name');
    table.string('password');
    table.string('first_name');
    table.string('last_name');
    table.text('about');
    table.string('location');
    table.string('email');
    table.string('phone_number');
    // table.refenence skills foreign
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('volunteer')
};
