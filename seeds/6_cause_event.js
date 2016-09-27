'use strict'

exports.seed = function(knex, Promise) {
  return knex('cause_event').del()
    .then(function () {
      return Promise.all([
        knex('cause_event').insert({
          cause_id: 7,
          event_id: 1,
        }),
        knex('cause_event').insert({
          cause_id: 29,
          event_id: 1,
        }),
        knex('cause_event').insert({
          cause_id: 10,
          event_id: 1,
        }),
        knex('cause_event').insert({
          cause_id: 6,
          event_id: 2,
        }),
        knex('cause_event').insert({
          cause_id: 13,
          event_id: 2,
        }),
        knex('cause_event').insert({
          cause_id: 19,
          event_id: 3,
        }),
        knex('cause_event').insert({
          cause_id: 20,
          event_id: 3,
        }),
        knex('cause_event').insert({
          cause_id: 24,
          event_id: 3,
        }),
        knex('cause_event').insert({
          cause_id: 29,
          event_id: 3,
        }),
        knex('cause_event').insert({
          cause_id: 3,
          event_id: 4,
        }),
        knex('cause_event').insert({
          cause_id: 22,
          event_id: 4,
        }),
        knex('cause_event').insert({
          cause_id: 24,
          event_id: 4,
        }),
        knex('cause_event').insert({
          cause_id: 15,
          event_id: 5,
        }),
        knex('cause_event').insert({
          cause_id: 13,
          event_id: 6,
        }),
        knex('cause_event').insert({
          cause_id: 19,
          event_id: 6,
        }),
        knex('cause_event').insert({
          cause_id: 8,
          event_id: 6,
        }),
        knex('cause_event').insert({
          cause_id: 11,
          event_id: 6,
        }),
        knex('cause_event').insert({
          cause_id: 2,
          event_id: 7,
        }),
        knex('cause_event').insert({
          cause_id: 4,
          event_id: 7,
        }),
        knex('cause_event').insert({
          cause_id: 1,
          event_id: 8,
        }),
        knex('cause_event').insert({
          cause_id: 18,
          event_id: 8,
        }),
        knex('cause_event').insert({
          cause_id: 14,
          event_id: 8,
        }),
        knex('cause_event').insert({
          cause_id: 6,
          event_id: 9,
        }),
        knex('cause_event').insert({
          cause_id: 16,
          event_id: 9,
        }),
        knex('cause_event').insert({
          cause_id: 19,
          event_id: 9,
        }),
        knex('cause_event').insert({
          cause_id: 14,
          event_id: 10,
        }),
        knex('cause_event').insert({
          cause_id: 15,
          event_id: 10,
        }),
        knex('cause_event').insert({
          cause_id: 16,
          event_id: 10,
        })
      ]);
    });
};
