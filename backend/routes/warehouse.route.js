let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Warehouse Model
let warehouseSchema = require('../Models/Warehouse');


// CREATE Warehouse
async function createWarehouse(req) {
  const Warehouses = await warehouseSchema.create({name:req.body.name, zone:req.body.zone, shelf:req.body.shelf});
  return Warehouses;
};
router.post('/create-warehouse', function (req, res) {
  createWarehouse(req).then(function(response) {
    res.json({response: response});
  })
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