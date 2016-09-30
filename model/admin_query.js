const knex = require('./knex_config.js')

function findAdminData() {
  return knex('organization')
  .where('user_name',orgName).first()
  .then((userData) => {
    if (typeof userData === 'undefined') {
      return
    } else {
      userData.type = 'organization'
      return userData
    }
  })
}
