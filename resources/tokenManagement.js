const ZCRMRestClient = require('zcrmsdk')
let { getGrant, refreshToken } = require('../lib')
let User = require('../models/user')

let tokenManagement = {}

tokenManagement.getOAuthTokens = async (user_identifier) => {
  
  return new Promise(async (resolve, reject) => {
    
    try {
      let user = await User.findOne({
        useridentifier: 'zcrm_default_user'
      })

      let res = await refreshToken(user.refreshtoken)

      // user = Object.assign(user, {
      //   accesstoken: res.data.access_token
      // })

      // await user.save()
      console.log(user)
      resolve([
        {
          accesstoken: user.accesstoken,
          refreshtoken: user.refreshtoken,
          expirytime: user.expirytime
        }
      ])

    } catch (err) {
      reject (err)
    }

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