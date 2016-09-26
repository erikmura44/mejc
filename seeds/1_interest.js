'use strict'

exports.seed = function(knex, Promise) {
  return knex('interest').del()
    .then(function () {
      return Promise.all([
        knex('interest').insert({
          id: 1,
          name: 'Advocacy & Human Rights'
        }),
        knex('interest').insert({
          id: 2,
          name: 'Animals'
        }),
        knex('interest').insert({
          id: 3,
          name: 'Arts & Culture'
        }),
        knex('interest').insert({
          id: 4,
          name: 'Board Developement'
        }),
        knex('interest').insert({
          id: 5,
          name: 'Children & Youth'
        }),
        knex('interest').insert({
          id: 6,
          name: 'Community Building'
        }),
        knex('interest').insert({
          id: 7,
          name: 'Computers & Technology'
        }),
        knex('interest').insert({
          id: 8,
          name: 'Crisis Support'
        }),
        knex('interest').insert({
          id: 9,
          name: 'Disaster Relief'
        }),
        knex('interest').insert({
          id: 10,
          name: 'Education & Literacy'
        }),
        knex('interest').insert({
          id: 11,
          name: 'Emergency & Safety'
        }),
        knex('interest').insert({
          id: 12,
          name: 'Employment'
        }),
        knex('interest').insert({
          id: 13,
          name: 'Environment'
        }),
        knex('interest').insert({
          id: 14,
          name: 'Faith-Based'
        }),
        knex('interest').insert({
          id: 15,
          name: 'Health & Medicine'
        }),
        knex('interest').insert({
          id: 16,
          name: 'Homelessness & Housing'
        }),
        knex('interest').insert({
          id: 17,
          name: 'Hunger'
        }),
        knex('interest').insert({
          id: 18,
          name: 'Immigration & Refugees'
        }),
        knex('interest').insert({
          id: 19,
          name: 'International'
        }),
        knex('interest').insert({
          id: 20,
          name: 'Justice & Legal'
        }),
        knex('interest').insert({
          id: 21,
          name: 'LGBTQIA'
        }),
        knex('interest').insert({
          id: 22,
          name: 'Media & Broadcasting'
        }),
        knex('interest').insert({
          id: 23,
          name: 'People with Disabilities'
        }),
        knex('interest').insert({
          id: 24,
          name: 'Politics'
        }),
        knex('interest').insert({
          id: 25,
          name: 'Race & Ethnicity'
        }),
        knex('interest').insert({
          id: 26,
          name: 'Seniors'
        }),
        knex('interest').insert({
          id: 27,
          name: 'Sports & Recreation'
        }),
        knex('interest').insert({
          id: 28,
          name: 'Veterans & Military Families'
        }),
        knex('interest').insert({
          id: 29,
          name: 'Women'
        })
      ]);
    });
};
