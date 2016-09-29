exports.up = function(knex, Promise) {
  return knex.schema.createTable('cause', function(table) {
    table.increments('id').primary();
    table.string('name');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cause')
}
