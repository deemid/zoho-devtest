const ZCRMRestClient = require('zcrmsdk')

const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/callback', async (req, res, next) => {
  res.json(req.query)
})

router.get('/api/leads', async (req, res, next) => {
  try {
    await ZCRMRestClient.initialize()

    const input = {}
    input.module = 'Leads'

    const params = {}
    params.page = req.query.page || 0
    params.per_page = req.query.per_page || 5
    input.params = params

    let response = await ZCRMRestClient.API.MODULES.get(input)
    let data = response.body
    data = JSON.parse(data)
    data = data.data

    res.json(data)

  } catch (err) {
    next(err)
  }
})

module.exports = router
