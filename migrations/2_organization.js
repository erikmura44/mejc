exports.up = function(knex, Promise) {
  return knex.schema.createTable('organization', function(table) {
    table.increments('id').primary();
    table.string('user_name');
    table.string('password');

    table.text('about');
    table.string('email');
    table.string('phone_number');

    table.string('organization_name');
    table.string('street');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.string('contact');
    table.string('org_logo_url');
    table.string('website');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('organization')
}
