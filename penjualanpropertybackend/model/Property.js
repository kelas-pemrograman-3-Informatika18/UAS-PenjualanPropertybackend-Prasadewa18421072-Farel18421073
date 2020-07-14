const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PropertySchema = new Schema({
  judulRumah: {
    type: String
  },
  harga: {
    type: Number
  },
  tahunpembuatan: {
    type: String,
    default: '2000'
  },
  kondisi: {
    type: String    
  },
  rating: {
    type: Number,
    default: 0
  },
  deskripsirumah: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('property', PropertySchema)
