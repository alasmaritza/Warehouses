const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let warehouseSchema = new Schema({
  name: {
    type: String,
  },
  zone: {
    type: Number,
  },
  shelf: {
    type: Object,
  }
}, {
    collection: 'warehouses'
  })
module.exports = mongoose.model('Warehouse', warehouseSchema)