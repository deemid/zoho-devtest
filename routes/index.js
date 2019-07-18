const express = require('express')
const router = express.Router()

const Lead = require('../models/lead')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/callback', async (req, res, next) => {
  res.json(req.query)
})

router.get('/api/leads', async (req, res, next) => {
  try {
    let leads = await Lead.find()

    res.status(200).json(leads)

  } catch (err) {
    next(err)
  }
})

router.get('/leads', async (req, res, next) => {
  try {
    let leads = await Lead.find()

    res.render('leads', {
      leads
    })

  } catch (err) {
    next(err)
  }
})

router.get('/leads/:id', async (req, res, next) => {
  try {
    let lead = await Lead.findById(req.params.id)

    res.render('lead', {
      lead,
      leadJSON: JSON.stringify(lead, null, 2)
    })

  } catch (err) {
    next(err)
  }
})

module.exports = router
