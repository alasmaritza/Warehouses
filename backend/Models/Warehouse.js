const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let warehouseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Warehouse name is required'],
  },
  zone: {
    type: Number,
    required: [true],
    min: 1,
    max: 12
  },
  shelves: {
    type: Array,
    max: [10, 'Max allowed is 10, got {VALUE}']
  }
}, {
    collection: 'warehouses'
  })
module.exports = mongoose.model('Warehouse', warehouseSchema)