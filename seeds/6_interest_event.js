'use strict'

exports.seed = function(knex, Promise) {
  return knex('interest_event').del()
    .then(function () {
      return Promise.all([
        knex('interest_event').insert({
          interest_id: 7,
          event_id: 1,
        }),
        knex('interest_event').insert({
          interest_id: 29,
          event_id: 1,
        }),
        knex('interest_event').insert({
          interest_id: 10,
          event_id: 1,
        }),
        knex('interest_event').insert({
          interest_id: 6,
          event_id: 2,
        }),
        knex('interest_event').insert({
          interest_id: 13,
          event_id: 2,
        }),
        knex('interest_event').insert({
          interest_id: 19,
          event_id: 3,
        }),
        knex('interest_event').insert({
          interest_id: 20,
          event_id: 3,
        }),
        knex('interest_event').insert({
          interest_id: 24,
          event_id: 3,
        }),
        knex('interest_event').insert({
          interest_id: 29,
          event_id: 3,
        }),
        knex('interest_event').insert({
          interest_id: 3,
          event_id: 4,
        }),
        knex('interest_event').insert({
          interest_id: 22,
          event_id: 4,
        }),
        knex('interest_event').insert({
          interest_id: 24,
          event_id: 4,
        }),
        knex('interest_event').insert({
          interest_id: 15,
          event_id: 5,
        }),
        knex('interest_event').insert({
          interest_id: 13,
          event_id: 6,
        }),
        knex('interest_event').insert({
          interest_id: 19,
          event_id: 6,
        }),
        knex('interest_event').insert({
          interest_id: 8,
          event_id: 6,
        }),
        knex('interest_event').insert({
          interest_id: 11,
          event_id: 6,
        }),
        knex('interest_event').insert({
          interest_id: 2,
          event_id: 7,
        }),
        knex('interest_event').insert({
          interest_id: 4,
          event_id: 7,
        }),
        knex('interest_event').insert({
          interest_id: 1,
          event_id: 8,
        }),
        knex('interest_event').insert({
          interest_id: 18,
          event_id: 8,
        }),
        knex('interest_event').insert({
          interest_id: 14,
          event_id: 8,
        }),
        knex('interest_event').insert({
          interest_id: 6,
          event_id: 9,
        }),
        knex('interest_event').insert({
          interest_id: 16,
          event_id: 9,
        }),
        knex('interest_event').insert({
          interest_id: 19,
          event_id: 9,
        }),
        knex('interest_event').insert({
          interest_id: 14,
          event_id: 10,
        }),
        knex('interest_event').insert({
          interest_id: 15,
          event_id: 10,
        }),
        knex('interest_event').insert({
          interest_id: 16,
          event_id: 10,
        })
      ]);
    });
};
