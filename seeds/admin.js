
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE admin_id_seq RESTART WITH 3')
    .then(function() {
      return knex('admin').del()
    })
    .then(function () {
      return Promise.all([
        knex('admin').insert({
          id: 1,
          user_name: 'adminFaker_1',
          password: 'adminFaker_1',
          email: 'ivolunteer_1@ivolunteer.com'
        }),
        knex('admin').insert({
          id: 2,
          user_name: 'adminFaker2',
          password: 'adminFaker_2',
          email: 'ivolunteer_2@ivolunteer.com'
        }),
      ]);
    });
};
