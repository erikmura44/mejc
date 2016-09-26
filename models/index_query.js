/* Find user function is a fulljoin for passport */
var bcrypt = require('bcrypt');
var knex = require('./knex_config.js');

//Volunteer Login
function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

function findVolunteerUsername(username){
  return knex('volunteer').select('user_name').where('user_name',username).first();
}

function findVolunteerData(username){
  return knex('volunteer').where('user_name',username).first();
}

function findVolunteerHashedPassword(username){
  return knex('volunteer').select('volunteer.password').where('volunteer.user_name',username).first();
}

function authenticateVolunteer(username, password){
  return findVolunteerUsername(username)
  .then(function(userData){
    if(!userData){
      return false;
    }
    return findVolunteerHashedPassword(username)
    .then(function(hashedPassword){
      hashedPassword = hashedPassword.password;
      return bcrypt.compareSync(password, hashedPassword);
    });
  });
}

function addVolunteer(user_name,password,email){
  // if(!user_name || !password || !email){
  //   return false;
  // }
  return findVolunteerUsername(username)
  .then(function(data){
    if(data){
      return false;
    }
    return knex('volunteer').insert({user_name: user_name, password: hashPassword(password),email:email});
  })
  .catch(function(err){
    return err;
  });
}


//Organization Login
function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

function findOrganizationUsername(username){
  return knex('organization').select('user_name').where('user_name',username).first();
}

function findOrganizationData(username){
  return knex('organization').where('user_name',username).first();
}

function findOrganizationHashedPassword(username){
  return knex('organization').select('organization.password').where('organization.user_name',username).first();
}

function authenticateOrganization(username, password){
  return findOrganizationUsername(username)
  .then(function(userData){
    if(!userData){
      return false;
    }
    return findOrganizationHashedPassword(username)
    .then(function(hashedPassword){
      hashedPassword = hashedPassword.password;
      return bcrypt.compareSync(password, hashedPassword);
    });
  });
}

function addOrganization(user_name,password,email){
  // if(!user_name || !password || !email){
  //   return false;
  // }
  return findOrganizationUsername(username)
  .then(function(data){
    if(data){
      return false;
    }
    return knex('organization').insert({user_name: user_name, password: hashPassword(password),email:email});
  })
  .catch(function(err){
    return err;
  });
}


module.exports {
  findVolunteerUsername:findVolunteerUsername,
  findVolunteerData: findVolunteerData,
  findVolunteerHashedPassword: findVolunteerHashedPassword,
  findOrganizationUsername: findOrganizationUsername,
  findOrganizationData: findOrganizationData,
  findOrganizationHashedPassword: findOrganizationHashedPassword
};
