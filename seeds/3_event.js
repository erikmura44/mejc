'use strict'

let fakeInfo = require('../seed_generator.js')

exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE event_id_seq RESTART WITH 11')
    .then(function() {
      return knex('event').del()
    })
    .then(function () {
      return Promise.all([
        knex('event').insert({
          id: 1,
          title: 'Events coordination assistance for the Introduction to Programming with Javascript',
          location: 'Galanize - Platte',
          address: '1644 Platte St, Denver, CO 80202',
          start_date: 2016-10-01,
          end_date: 2016-10-01,
          start_time: 09:00:00,
          end_time: 17:00:00,
          description: fakeInfo.description(),
          available_positions: 4,
          registed_volunteers: 3,
          organization_id: 9
        }),
        knex('event').insert({
          id: 2,
          title: 'Volunteers for the Platte River Clean Up',
          location: 'Confluence Park',
          address: '2200 15th St, Denver, CO 80202',
          start_date: 2016-09-30,
          end_date: 2016-09-30,
          start_time: 10:00:00,
          end_time: 12:30:00,
          description: fakeInfo.description(),
          available_positions: 50,
          registed_volunteers: 2,
          organization_id: 10
        }),
        knex('event').insert({
          id: 3,
          title: 'Volunteers for the Block Party: Global Greengrants Fund and Global Fund for Women',
          location: 'Posner Center Commons',
          address: '1031 33rd St, Denver, Colorado, 80205, United States',
          start_date: 2016-10-06,
          end_date: 2016-10-06,
          start_time: 11:30:00,
          end_time: 13:00:00,
          description: fakeInfo.description(),
          available_positions: 3,
          registed_volunteers: 0,
          organization_id: 1
        }),
        knex('event').insert({
          id: 4,
          title: 'Volunteers for the \'Government NOW! The Return of the City-State\' event',
          location: 'Seawell Grand Ballroom, Denver Performing Arts Complex',
          address: '1400 Curtis Street, Denver, CO 80204',
          start_date: 2016-11-05,
          end_date: 2016-11-05,
          start_time: 10:00:00,
          end_time: 12:00:00,
          description: fakeInfo.description(),
          available_positions: 4,
          registed_volunteers: 1,
          organization_id: 2
        }),
        knex('event').insert({
          id: 5,
          title: 'Volunteer Crisis Advocate',
          location: ,
          address: '1925 E ORMAN AVE Ste G-52 PUEBLO, CO 81004',
          start_date: 2016-11-01,
          end_date: 2071-02-30,
          start_time: ,
          end_time: ,
          description: fakeInfo.description(),
          available_positions: 8,
          registed_volunteers: 2,
          organization_id: 7
        }),
        knex('event').insert({
          id: 6,
          title: 'Volunteer Canvaser',
          location: 'Roasted Espresso and Subs',
          address: '502 Colorado Ave, Grand Junction, CO 81501',
          start_date: 2016-10-01,
          end_date: 2017-01-01,
          start_time: ,
          end_time: ,
          description: fakeInfo.description(),
          available_positions: 3,
          registed_volunteers: 2,
          organization_id: 8
        }),
        knex('event').insert({
          id: 7,
          title: 'Event Coordination for the WildAgain Winter Gala',
          location: 'DoubleTree - Stapleton North',
          address: '4040 Quebec St, Denver, CO 80216',
          start_date: 2016-12-05,
          end_date: 2016-12-05,
          start_time: 1:30:00,
          end_time: 23:30:00,
          description: fakeInfo.description(),
          available_positions: 4,
          registed_volunteers: 0,
          organization_id: 3
        }),
        knex('event').insert({
          id: 8,
          title: 'Refugee Service Intern',
          location: 'Denver Rescue Mission',
          address: '3501 E. 46th Avenue, Denver, CO 80216',
          start_date: 2016-10-01,
          end_date: 2016-05-01,
          start_time: ,
          end_time: ,
          description: fakeInfo.description(),
          available_positions: 2,
          registed_volunteers: 0,
          organization_id: 5
        }),
        knex('event').insert({
          id: 9,
          title: 'Office & Committee Volunteers',
          location: 'Flatirons Habitat for Humanity',
          address: '2540 Frontier Ave Boulder, CO 80301',
          start_date: 9:00:00,
          end_date: 16:30:00,
          start_time: ,
          end_time: ,
          description: fakeInfo.description(),
          available_positions: 5,
          registed_volunteers: 3,
          organization_id: 4
        }),
        knex('event').insert({
          id: 10,
          title: 'Medical Assistant Intern',
          location: 'Denver Rescue Mission',
          address: '3501 E. 46th Avenue, Denver, CO 80216',
          start_date: 2016-10-01,
          end_date: 2016-05-01,
          start_time: ,
          end_time: ,
          description: fakeInfo.description(),
          available_positions: 2,
          registed_volunteers: 0,
          organization_id: 5
        })
      ]);
    });
};
