'use strict'

exports.seed = function(knex, Promise) {
  return knex('interest_volunteer').del()
    .then(function () {
      return Promise.all([
        knex('interest_volunteer').insert({
          interest_id: 1,
          volunteer_id: 1,
        }),
        knex('interest_volunteer').insert({
          interest_id: 5,
          volunteer_id: 1,
        }),
        knex('interest_volunteer').insert({
          interest_id: 7,
          volunteer_id: 1,
        }),
        knex('interest_volunteer').insert({
          interest_id: 25,
          volunteer_id: 1,
        }),
        knex('interest_volunteer').insert({
          interest_id: 23,
          volunteer_id: 2,
        }),
        knex('interest_volunteer').insert({
          interest_id: 15,
          volunteer_id: 2,
        }),
        knex('interest_volunteer').insert({
          interest_id: 17,
          volunteer_id: 2,
        }),
        knex('interest_volunteer').insert({
          interest_id: 10,
          volunteer_id: 2,
        }),
        knex('interest_volunteer').insert({
          interest_id: 20,
          volunteer_id: 3,
        }),
        knex('interest_volunteer').insert({
          interest_id: 21,
          volunteer_id: 3,
        }),
        knex('interest_volunteer').insert({
          interest_id: 19,
          volunteer_id: 4,
        }),
        knex('interest_volunteer').insert({
          interest_id: 22,
          volunteer_id: 4,
        }),
        knex('interest_volunteer').insert({
          interest_id: 24,
          volunteer_id: 4,
        }),
        knex('interest_volunteer').insert({
          interest_id: 5,
          volunteer_id: 5,
        }),
        knex('interest_volunteer').insert({
          interest_id: 7,
          volunteer_id: 5,
        }),
        knex('interest_volunteer').insert({
          interest_id: 21,
          volunteer_id: 5,
        }),
        knex('interest_volunteer').insert({
          interest_id: 16,
          volunteer_id: 6,
        }),
        knex('interest_volunteer').insert({
          interest_id: 14,
          volunteer_id: 6,
        }),
        knex('interest_volunteer').insert({
          interest_id: 18,
          volunteer_id: 7,
        }),
        knex('interest_volunteer').insert({
          interest_id: 8,
          volunteer_id: 7,
        }),
        knex('interest_volunteer').insert({
          interest_id: 7,
          volunteer_id: 7,
        }),
        knex('interest_volunteer').insert({
          interest_id: 6,
          volunteer_id: 8,
        }),
        knex('interest_volunteer').insert({
          interest_id: 16,
          volunteer_id: 8,
        }),
        knex('interest_volunteer').insert({
          interest_id: 29,
          volunteer_id: 8,
        }),
        knex('interest_volunteer').insert({
          interest_id: 2,
          volunteer_id: 9,
        }),
        knex('interest_volunteer').insert({
          interest_id: 13,
          volunteer_id: 9,
        }),
        knex('interest_volunteer').insert({
          interest_id: 3,
          volunteer_id: 9,
        }),
        knex('interest_volunteer').insert({
          interest_id: 15,
          volunteer_id: 10,
        }),
        knex('interest_volunteer').insert({
          interest_id: 16,
          volunteer_id: 11,
        }),
        knex('interest_volunteer').insert({
          interest_id: 17,
          volunteer_id: 11,
        }),
        knex('interest_volunteer').insert({
          interest_id: 21,
          volunteer_id: 12,
        }),
        knex('interest_volunteer').insert({
          interest_id: 18,
          volunteer_id: 12,
        }),
        knex('interest_volunteer').insert({
          interest_id: 19,
          volunteer_id: 12,
        }),
        knex('interest_volunteer').insert({
          interest_id: 15,
          volunteer_id: 13,
        }),
        knex('interest_volunteer').insert({
          interest_id: 10,
          volunteer_id: 14,
        }),
        knex('interest_volunteer').insert({
          interest_id: 5,
          volunteer_id: 14,
        }),
        knex('interest_volunteer').insert({
          interest_id: 6,
          volunteer_id: 14,
        }),
        knex('interest_volunteer').insert({
          interest_id: 2,
          volunteer_id: 15,
        }),
      ]);
    });
};
