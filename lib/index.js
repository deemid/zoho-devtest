const ZCRMRestClient = require('zcrmsdk')
const axios = require('axios')

const Lead = require('../models/lead')

let client_id = process.env.CLIENT_ID
let client_secret = process.env.CLIENT_SECRET
let baseUrl = 'https://accounts.zoho.com/oauth/v2'

const getGrant = async () => {
  return new Promise((resolve, reject) => {
    let scope = 'aaaserver.profile.READ,ZohoCRM.users.ALL,ZohoCRM.org.ALL,ZohoCRM.modules.ALL'
    let redirect_uri = 'https://zoho-devtest.herokuapp.com/callback'

    let url = `${baseUrl}/auth?scope=${scope}&client_id=${client_id}&response_type=code&access_type=offline&redirect_uri=${redirect_uri}`

    axios.get(url).then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log('ERROR GRANT', err)
      reject(err)
    })
  })
}

const refreshToken = refreshToken => {
  return axios.post(`${baseUrl}/token?refresh_token=${refreshToken}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`)
}

const syncLeadsFromZoho = async () => {
  try {
    await ZCRMRestClient.initialize()
    let leads = await Lead.find()

    if (leads.count > 0) {
      console.log('Leads already seeded')
      return
    }

    const input = {}
    input.module = 'Leads'

    const params = {}
    params.page = 0
    params.per_page = 10
    input.params = params

    let response = await ZCRMRestClient.API.MODULES.get(input)
    let data = response.body
    data = JSON.parse(data)
    data = data.data

    data = data.map(lead => {
      lead.currency_symbol = lead['$currency_symbol']
      lead.converted = lead['$converted']
      lead.process_flow = lead['$process_flow']
      lead.approved = lead['$approved']
      lead.approval = lead['$approval']
      lead.converted_detail = lead['$converted_detail']
      lead.editable = lead['$editable']

      delete lead['$currency_symbol']
      delete lead['$converted']
      delete lead['$process_flow']
      delete lead['$currency_symbol']
      delete lead['$approval']
      delete lead['$converted_detail']
      delete lead['$editable']

      return lead
    })

    // res.json(data)
    await Lead.insertMany(data)

  } catch (err) {
    console.log(err)
    console.log('Error seeding Leads')
  }
}

exports.getGrant = getGrant
exports.refreshToken = refreshToken
exports.syncLeadsFromZoho = syncLeadsFromZoho