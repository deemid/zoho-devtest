let User = require('./models/user')

User.findOne({
  useridentifier: 'zcrm_default_user'
}).then(user => {
  if (!user) {
    User.create({
      useridentifier: 'zcrm_default_user',
      accesstoken: '1000.68ff054445d75728a1ce22d73e4fd4df.0ce4537388ce25ad621a49d373a9bd88',
      refreshtoken: '1000.6146bace10ebab1f0b7c0d78cc530d96.aef18e94db6df94e844d375c0411758e',
      expirytime: 1563393239134
    })
  }
})