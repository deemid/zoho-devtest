const axios = require('axios')

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

exports.getGrant = getGrant
exports.refreshToken = refreshToken