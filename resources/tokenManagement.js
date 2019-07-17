let tokenManagement = {}

tokenManagement.getOAuthTokens = function(user_identifier) {
  return new Promise(function(resolve, reject) {
    var result = {}
    result.accesstoken = '1000.68ff054445d75728a1ce22d73e4fd4df.0ce4537388ce25ad621a49d373a9bd88'
    result.expirytime = 1563393239134
    result.refreshtoken = '1000.6146bace10ebab1f0b7c0d78cc530d96.aef18e94db6df94e844d375c0411758e'
    var result_array = []
    result_array.push(result)
    resolve(result_array)
  })
}

module.exports = tokenManagement