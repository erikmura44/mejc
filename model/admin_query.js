const knex = require('./knex_config.js')

function findAdminData(adminName) {
  return knex('organization')
  .where('user_name', adminName).first()
  .then((userData) => {
    if (typeof userData === 'undefined') {
      return
    } else {
      userData.type = 'organization'
      return userData
    }
  })
}
