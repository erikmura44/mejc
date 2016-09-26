'use strict'

let fakeInfo = require('../seed_generator.js')

exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE event_id_seq RESTART WITH 26')
    .then(function() {
      return knex('event').del()
    })
    .then(function () {
      return Promise.all([
        knex('event').insert({
          id: 1,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        }),
        knex('event').insert({
          id: ,
          title: ,
          address: ,
          start_date: ,
          end_date: ,
          start_time: ,
          end_time: ,
          description: ,
        })
      ]);
    });
};
