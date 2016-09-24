'use strict'

const knex = requre('knex')
const config = requre('../knexfile.js')
const env = process.env.NODE_ENV || 'development'

let pg = knex(config[env])

module.exports = pg
