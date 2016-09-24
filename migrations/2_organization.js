exports.up = function(knex, Promise) {
  return knex.schema.createTable('organization', function(table) {
    table.increments('id').primary();
    table.string('user_name');
    table.string('password');
    table.string('organization_name');
    table.text('about');
    table.string('city');
    table.string('contact_name');
    table.string('email');
    table.string('phone_number');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('organization')
};
