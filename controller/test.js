const testModel = require('../model/test_queries')


// FOR THE EVENT ROUTE
router.get('/test/searchc', (req, res, next) => {
  testModel.filterEventbyCause('International')
    .then((data) => {
      console.log(data)
    })
})

router.get('/test/searchcc', (req, res, next) => {
  testModel.filterEventbyCause_City('International', 'Denver')
    .then((data) => {
      console.log(data)
    })
})

// FOR THE ORGANIZATION ROUTE
router.get('/test/searchc', (req, res, next) => {
  organizationModel.filterOrganizationbyCity('Pueblo')
    .then((data) => {
      console.log(data)
    })
})

// FOR THE VOLUNTEER ROUTE
router.get('/test/searchc', (req, res, next) => {
  testModel.filterVolunteerbyCause('LGBTQIA')
  .then((data) => {
    console.log(data)
  })
})

router.get('/test/searchcc', (req, res, next) => {
  testModel.filterVolunteerbyCause_City('LGBTQIA', 'Pueblo')
  .then((data) => {
    console.log(data)
  })
})

module.exports = router
