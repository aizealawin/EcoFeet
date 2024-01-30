const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const trackerSchema = new Schema(
  {
    hvac: {type: Number},
    hvacType: {type: Number},
    hvacUnits: {type: Number},
    gasBill: {type: Number},
    electricBill: {type: Number}, 
    waterBill: {type: Number},
    zipCode: {type: Number}
  },
  { timestamps: true}
)

module.exports = mongoose.model('Tracker', trackerSchema)