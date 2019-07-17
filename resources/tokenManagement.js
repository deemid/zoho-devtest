let tokenManagement = {}

tokenManagement.getOAuthTokens = function(user_identifier) {
  return new Promise(function(resolve, reject) {
    var result = {}
    result.accesstoken =
      '1000.f532a5f0e7cd79389bbe7ed945094775.5f7c3eef27169412f6884a34f06d5143'
    result.expirytime = 3600000
    result.refreshtoken =
      '1000.350fbfa8bbc26acf681ef0a399f22500.394abec896b085f1192461f4e15914ec'
    var result_array = []
    result_array.push(result)
    resolve(result_array)
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
