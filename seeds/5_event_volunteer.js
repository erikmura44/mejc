'use strict'

exports.seed = function(knex, Promise) {
  return knex('event_volunteer').del()
    .then(function () {
      return Promise.all([
        knex('event_volunteer').insert({
          event_id: 1,
          volunteer_id: 14,
        }),
        knex('event_volunteer').insert({
          event_id: 1,
          volunteer_id: 8,
        }),
        knex('event_volunteer').insert({
          event_id: 1,
          volunteer_id: 1,
        }),
        knex('event_volunteer').insert({
          event_id: 2,
          volunteer_id: 9,
        }),
        knex('event_volunteer').insert({
          event_id: 2,
          volunteer_id: 8,
        }),
        knex('event_volunteer').insert({
          event_id: 4,
          volunteer_id: 4,
        }),
        knex('event_volunteer').insert({
          event_id: 5,
          volunteer_id: 13,
        }),
        knex('event_volunteer').insert({
          event_id: 5,
          volunteer_id: 2,
        }),
        knex('event_volunteer').insert({
          event_id: 6,
          volunteer_id: 12,
        }),
        knex('event_volunteer').insert({
          event_id: 6,
          volunteer_id: 4,
        }),
        knex('event_volunteer').insert({
          event_id: 9,
          volunteer_id: 4,
        }),
        knex('event_volunteer').insert({
          event_id: 9,
          volunteer_id: 8,
        }),
        knex('event_volunteer').insert({
          event_id: 9,
          volunteer_id: 14,
        })
      ])
    })
}
