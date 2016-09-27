'use strict'

exports.seed = function(knex, Promise) {
  return knex('cause_volunteer').del()
    .then(function () {
      return Promise.all([
        knex('cause_volunteer').insert({
          cause_id: 1,
          volunteer_id: 1,
        }),
        knex('cause_volunteer').insert({
          cause_id: 5,
          volunteer_id: 1,
        }),
        knex('cause_volunteer').insert({
          cause_id: 7,
          volunteer_id: 1,
        }),
        knex('cause_volunteer').insert({
          cause_id: 25,
          volunteer_id: 1,
        }),
        knex('cause_volunteer').insert({
          cause_id: 23,
          volunteer_id: 2,
        }),
        knex('cause_volunteer').insert({
          cause_id: 15,
          volunteer_id: 2,
        }),
        knex('cause_volunteer').insert({
          cause_id: 17,
          volunteer_id: 2,
        }),
        knex('cause_volunteer').insert({
          cause_id: 10,
          volunteer_id: 2,
        }),
        knex('cause_volunteer').insert({
          cause_id: 20,
          volunteer_id: 3,
        }),
        knex('cause_volunteer').insert({
          cause_id: 21,
          volunteer_id: 3,
        }),
        knex('cause_volunteer').insert({
          cause_id: 19,
          volunteer_id: 4,
        }),
        knex('cause_volunteer').insert({
          cause_id: 22,
          volunteer_id: 4,
        }),
        knex('cause_volunteer').insert({
          cause_id: 24,
          volunteer_id: 4,
        }),
        knex('cause_volunteer').insert({
          cause_id: 5,
          volunteer_id: 5,
        }),
        knex('cause_volunteer').insert({
          cause_id: 7,
          volunteer_id: 5,
        }),
        knex('cause_volunteer').insert({
          cause_id: 21,
          volunteer_id: 5,
        }),
        knex('cause_volunteer').insert({
          cause_id: 16,
          volunteer_id: 6,
        }),
        knex('cause_volunteer').insert({
          cause_id: 14,
          volunteer_id: 6,
        }),
        knex('cause_volunteer').insert({
          cause_id: 18,
          volunteer_id: 7,
        }),
        knex('cause_volunteer').insert({
          cause_id: 8,
          volunteer_id: 7,
        }),
        knex('cause_volunteer').insert({
          cause_id: 7,
          volunteer_id: 7,
        }),
        knex('cause_volunteer').insert({
          cause_id: 6,
          volunteer_id: 8,
        }),
        knex('cause_volunteer').insert({
          cause_id: 16,
          volunteer_id: 8,
        }),
        knex('cause_volunteer').insert({
          cause_id: 29,
          volunteer_id: 8,
        }),
        knex('cause_volunteer').insert({
          cause_id: 2,
          volunteer_id: 9,
        }),
        knex('cause_volunteer').insert({
          cause_id: 13,
          volunteer_id: 9,
        }),
        knex('cause_volunteer').insert({
          cause_id: 3,
          volunteer_id: 9,
        }),
        knex('cause_volunteer').insert({
          cause_id: 15,
          volunteer_id: 10,
        }),
        knex('cause_volunteer').insert({
          cause_id: 16,
          volunteer_id: 11,
        }),
        knex('cause_volunteer').insert({
          cause_id: 17,
          volunteer_id: 11,
        }),
        knex('cause_volunteer').insert({
          cause_id: 21,
          volunteer_id: 12,
        }),
        knex('cause_volunteer').insert({
          cause_id: 18,
          volunteer_id: 12,
        }),
        knex('cause_volunteer').insert({
          cause_id: 19,
          volunteer_id: 12,
        }),
        knex('cause_volunteer').insert({
          cause_id: 15,
          volunteer_id: 13,
        }),
        knex('cause_volunteer').insert({
          cause_id: 10,
          volunteer_id: 14,
        }),
        knex('cause_volunteer').insert({
          cause_id: 5,
          volunteer_id: 14,
        }),
        knex('cause_volunteer').insert({
          cause_id: 6,
          volunteer_id: 14,
        }),
        knex('cause_volunteer').insert({
          cause_id: 2,
          volunteer_id: 15,
        }),
      ]);
    });
};
