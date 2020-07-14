const propertyModel = require('../model/Property')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

// input
exports.insertProperty = (data) =>
  new Promise((resolve, reject) => {
    propertyModel.create(data)
      .then(() => resolve(requestResponse.sukses('Berhasi Input Property')))
      .catch(() => reject(requestResponse.serverError))
  })

// tampill 
  exports.getallProperty = () =>
  new Promise((resolve, reject) => {
    propertyModel.find({})
      .then(property => resolve(requestResponse.suksesWithData(property)))
      .catch(error => reject(requestResponse.serverError))
  })

  exports.getbyId = (id) =>
  new Promise((resolve, reject) => {
    propertyModel.findOne({
      _id: objectId(id)
    }).then(property => resolve(requestResponse.suksesWithData(property)))
    .catch(error => reject(requestResponse.serverError))
  })

// edit
exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    propertyModel.updateOne({
      _id: objectId(id)
    }, data)
    .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Data Property'))
    }).catch(() => reject(requestResponse.serverError))
  })

  // hapus
  exports.delete = (id) =>
  new Promise((resolve, reject) => {
    propertyModel.findOne({
      _id: objectId(id)
    }).then(property => {
      propertyModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(property.image)
        resolve(requestResponse.sukses('berhasil delete Property'))
      }).catch(() => reject(requestResponse.serverError))
    })
  })