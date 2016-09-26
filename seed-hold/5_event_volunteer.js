'use strict'

exports.seed = function(knex, Promise) {
  return knex('event_volunteer').del()
    .then(function () {
      return Promise.all([
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        }),
        knex('event_volunteer').insert({
          event_id: ,
          volunteer_id: ,
        })
      ]);
    });
};
