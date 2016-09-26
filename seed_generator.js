let faker = require('faker')

function fakeFirstName(){
  return faker.name.firstName()
}

function fakeLastName(){
  return faker.name.lastName()
}

function fakeUserName(){
  return faker.internet.userName()
}

function fakePhoneNumber(){
  return faker.phone.phoneNumberFormat()
}

function fakeEmail(){
  return faker.internet.email()
}

function fakePassword(){
  return faker.internet.password()
}

function fakeDescription(){
  return faker.lorem.sentences()
}

module.exports = {
  userName: fakeUserName,
  password: fakePassword,
  firstName: fakeFirstName,
  lastName: fakeLastName,
  phone: fakePhoneNumber,
  email: fakeEmail,
  description: fakeDescription
}
