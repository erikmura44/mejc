exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', function(table) {
    table.increments('id').primary();
    table.string('user_name');
    table.string('password');
    table.string('email');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admin')
}
