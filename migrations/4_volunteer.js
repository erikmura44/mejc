exports.up = function(knex, Promise) {
  return knex.schema.createTable('volunteer', function(table) {
    table.increments('id').primary();
    table.string('user_name');
    table.string('password');

    table.text('about');
    table.string('email');
    table.string('phone_number');
    table.string('picture_url');

    table.string('first_name');
    table.string('last_name');
    table.string('city');
    table.string('state');    // table.refenence skills foreign
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('volunteer')
}
