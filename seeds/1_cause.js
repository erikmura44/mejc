'use strict'

exports.seed = function(knex, Promise) {
  return knex('cause').del()
    .then(function () {
      return Promise.all([
        knex('cause').insert({
          id: 1,
          name: 'Advocacy & Human Rights'
        }),
        knex('cause').insert({
          id: 2,
          name: 'Animals'
        }),
        knex('cause').insert({
          id: 3,
          name: 'Arts & Culture'
        }),
        knex('cause').insert({
          id: 4,
          name: 'Board Developement'
        }),
        knex('cause').insert({
          id: 5,
          name: 'Children & Youth'
        }),
        knex('cause').insert({
          id: 6,
          name: 'Community Building'
        }),
        knex('cause').insert({
          id: 7,
          name: 'Computers & Technology'
        }),
        knex('cause').insert({
          id: 8,
          name: 'Crisis Support'
        }),
        knex('cause').insert({
          id: 9,
          name: 'Disaster Relief'
        }),
        knex('cause').insert({
          id: 10,
          name: 'Education & Literacy'
        }),
        knex('cause').insert({
          id: 11,
          name: 'Emergency & Safety'
        }),
        knex('cause').insert({
          id: 12,
          name: 'Employment'
        }),
        knex('cause').insert({
          id: 13,
          name: 'Environment'
        }),
        knex('cause').insert({
          id: 14,
          name: 'Faith-Based'
        }),
        knex('cause').insert({
          id: 15,
          name: 'Health & Medicine'
        }),
        knex('cause').insert({
          id: 16,
          name: 'Homelessness & Housing'
        }),
        knex('cause').insert({
          id: 17,
          name: 'Hunger'
        }),
        knex('cause').insert({
          id: 18,
          name: 'Immigration & Refugees'
        }),
        knex('cause').insert({
          id: 19,
          name: 'International'
        }),
        knex('cause').insert({
          id: 20,
          name: 'Justice & Legal'
        }),
        knex('cause').insert({
          id: 21,
          name: 'LGBTQIA'
        }),
        knex('cause').insert({
          id: 22,
          name: 'Media & Broadcasting'
        }),
        knex('cause').insert({
          id: 23,
          name: 'People with Disabilities'
        }),
        knex('cause').insert({
          id: 24,
          name: 'Politics'
        }),
        knex('cause').insert({
          id: 25,
          name: 'Race & Ethnicity'
        }),
        knex('cause').insert({
          id: 26,
          name: 'Seniors'
        }),
        knex('cause').insert({
          id: 27,
          name: 'Sports & Recreation'
        }),
        knex('cause').insert({
          id: 28,
          name: 'Veterans & Military Families'
        }),
        knex('cause').insert({
          id: 29,
          name: 'Women'
        })
      ])
    })
}
