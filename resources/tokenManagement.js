const ZCRMRestClient = require('zcrmsdk')
const axios = require('axios')

let tokenManagement = {}

tokenManagement.getOAuthTokens = function(user_identifier) {
  console.log('*******')
  console.log('process.env.ZOHO_SELF_CLIENT_GRANT', process.env.ZOHO_SELF_CLIENT_GRANT)
  console.log('*******')
  
  return new Promise(function(resolve, reject) {
    ZCRMRestClient.initialize().then(() => {

      let code = '1000.0a4ce3145b51b256f0ccce8a7cda1e71.62038c1c4779d138d9d9658a821b5b73'
      let redirect_uri = 'https://zoho-devtest.herokuapp.com/callback'
      let client_id = '1000.6C8RBS7CA9R919852CGADXIJ3LFD3H'
      let client_secret = '673f62458f586558773cfde758bb7ea53810b292df'
      let grant_type = 'authorization_code'  
    
      axios.post(`https://accounts.zoho.com/oauth/v2/token?code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}&`).then(res => {
        console.log('****ailyn')
        console.log(res.data)
      })

      resolve([
        {
          accesstoken: '1000.428d932457018b7f9964b846b4adb131.9be80d46797a5c80663efb70d2b77cf4',
          refreshtoken: '1000.256fb9dad522afd1785c121faa78ab4b.ae0361ca7fcc6ebaeab30365b3edb7fe',
          expirytime: 3600000
        }
      ])
      // ZCRMRestClient.generateAuthTokens(
      //   'zcrm_default_user',
      //   process.env.ZOHO_SELF_CLIENT_GRANT
      // )
      //   .then(function(auth_response) {
      //     var result = {}
      //     result.accesstoken = auth_response.access_token
      //     result.expirytime = auth_response.expires_in
      //     result.refreshtoken = auth_response.refresh_token
      //     var result_array = []
      //     result_array.push(result)
      //     resolve(result_array)
      //   })
      //   .catch(err => {
      //     console.log(Object.keys(err))
      //     reject(err)
      //   })
    })
  })
}

tokenManagement.updateOAuthTokens = function(token_obj) {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

tokenManagement.saveOAuthTokens = function(token_obj) {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

module.exports = tokenManagement

//   ZCRMRestClient.generateAuthTokens('zcrm_default_user','1000.9ef1cc75240a74be45a31a85bd49d346.0949ef470e477ddd1a58465d84e9672b').then(function(auth_response){

//       console.log("access token :"+auth_response.access_token);
//       console.log("refresh token :"+auth_response.refresh_token);
//       console.log("expires in :"+auth_response.expires_in);

//   }).catch(err => {
//     console.log('err')
//   })
