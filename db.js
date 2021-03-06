const mongoose = require('mongoose')
const createDefaultUser = require('./createDefaultUser')
const { syncLeadsFromZoho } = require('./lib')

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true
}

const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGODB_URI, options)
    .then(async () => {
      console.log(`Connected to MongoDB URI: ${process.env.MONGODB_URI}`)
      await createDefaultUser()
      console.log('Syncing Leads from ZOHO')
      syncLeadsFromZoho()
    })
    .catch(err => {
      console.log('MongoDB connection unsuccessful, reconnecting after 5 seconds...')
      setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry()
