const ZCRMRestClient = require('zcrmsdk')
let { getGrant, refreshToken } = require('../lib')
let User = require('../models/user')

let tokenManagement = {}

tokenManagement.getOAuthTokens = function(user_identifier) {
  
  return new Promise(function(resolve, reject) {
    
    User.findOne({
      useridentifier: 'zcrm_default_user'
    }).then(user => {
      refreshToken(user.refreshtoken).then(res => {
        user = Object.assign(user, {
          accesstoken: res.data.access_token
        })

        user.save().then(() => {
          resolve([
            {
              accesstoken: user.accesstoken,
              refreshtoken: user.refreshtoken,
              expirytime: user.expirytime
            }
          ])
        })
      }).catch(err => {
        reject(err)
      })
      
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
