let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
const Schema = mongoose.Schema;
// Warehouse Model
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

let Warehouse = mongoose.model('Warehouse', warehouseSchema);

// CREATE Warehouse
router.post('/create-warehouse', async (req, res) => {
  const Warehouses = new Warehouse({name:req.body.name, zone:req.body.zone, shelves:req.body.shelves});
  try {
  await Warehouses.save();
  res.status(200).send(Warehouses);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// READ Warehouses
async function getWarehouses() {
  const Warehouses = await warehouseSchema.find({});
  return Warehouses;
};
router.get('/', function (req, res) {
  getWarehouses().then(function(FoundWarehouses) {
    res.json({data:FoundWarehouses});
  })
});

module.exports = router;