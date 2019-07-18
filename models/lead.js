const mongoose = require('mongoose')

const LeadSchema = new mongoose.Schema({
  "Owner": {
    type: Object,
  },
  "Company": {
    type: String
  },
  "Email": {
    type: String
  },
  "Description": {
    type: String
  },
  "currency_symbol": {
    type: String
  },
  "Rating": {
    type: mongoose.SchemaTypes.Mixed
  },
  "Website": {
    type: String
  },
  "Twitter": {
    type: String
  },
  "Salutation": {
    type: String
  },
  "Last_Activity_Time": {
    type: String
  },
  "First_Name": {
    type: String
  },
  "Full_Name": {
    type: String
  },
  "Lead_Status": {
    type: String
  },
  "Industry": {
    type: String
  },
  "Record_Image": {
    type: String
  },
  "Modified_By": {
    type: Object
  },
  "Skype_ID": {
    type: String
  },
  "converted": {
    type: Boolean
  },
  "process_flow": {
    type: Boolean
  },
  "Phone": {
    type: String
  },
  "Street": {
    type: String
  },
  "Zip_Code": {
    type: String
  },
  "id": {
    type: String,
    unique: true
  },
  "Email_Opt_Out": {
    type: Boolean
  },
  "approved": {
    type: Boolean
  },
  "Designation": {
    type: String
  },
  "approval": {
    type: Object
  },
  "Modified_Time": {
    type: String
  },
  "Created_Time": {
    type: String
  },
  "converted_detail": {
    type: mongoose.SchemaTypes.Mixed
  },
  "editable": {
    type: Boolean
  },
  "City": {
    type: String
  },
  "No_of_Employees": {
    type: Number
  },
  "Mobile": {
    type: String
  },
  "Last_Name": {
    type: String
  },
  "State": {
    type: String
  },
  "Lead_Source": {
    type: String
  },
  "Country": {
    type: String
  },
  "Tag": {
    type: [String]
  },
  "Created_By": {
    type: Object
  },
  "Fax": {
    type: String
  },
  "Annual_Revenue": {
    type: Number
  },
  "Secondary_Email": {
    type: String
  }
})

const Lead = mongoose.model('Lead', LeadSchema)

module.exports = Lead