exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('address').notNullable();
    table.date('start_date').notNullable();  // Format: YYYY-MM-DD
    table.date('end_date').notNullable();
    table.time('start_time').notNullable();  // Format: HH:MI:SS
    table.time('end_time').notNullable();
    table.text('description').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event')
};
