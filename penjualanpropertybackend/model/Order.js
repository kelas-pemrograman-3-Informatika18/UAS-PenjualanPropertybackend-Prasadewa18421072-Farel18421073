const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = mongoose.Schema.ObjectId

const OrderSchema = new Schema({
  idUser: {
    type: objectId
  },
  idRumah: {
    type: objectId
  },
  harga: {
    type: Number
  },
  jumlah: {
    type: Number    
  },
  total: {
    type: Number
  },
  image: {
    type: String
  },
// 1 = belum di ferifikasi, 2 = sedang dalam proses, 3 = sudah di terima berkas
  status: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('order', OrderSchema)
