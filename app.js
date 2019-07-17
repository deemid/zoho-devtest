require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')

const app = express()

// db connection
require('./db')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// Zoho
const ZCRMRestClient = require('zcrmsdk')
ZCRMRestClient.initialize().then(function() {
  //do whatever required after initialize
  console.log('INITIALIZED')

  const input ={};
  input.module = "Leads";

  const params = {};
  params.page = 0;
  params.per_page = 5;
  input.params = params;
  
  ZCRMRestClient.API.MODULES.get(input).then(function(response){

      let data = response.body;
      data = JSON.parse(data);
      data = data.data;
      
      // console.log(JSON.stringify(data, null, 2))

  })

  // ZCRMRestClient.generateAuthTokens('zcrm_default_user','1000.40bd3dd46f550e5d316019d30f90e7d2.9b60241ccfcdd375ae99a13ea1092f11').then(function(auth_response){

  //     console.log("access token :"+auth_response.access_token);
  //     console.log("refresh token :"+auth_response.refresh_token);
  //     console.log("expires in :"+auth_response.expires_in);

  // });

}).catch(err => {
  console.log(err)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
