const express = require('express');
const router = express.router();
const supplierController = require('../controllers/supplier.controller');

router.get('/', supplierController.getAllSuppliers);
router.get('/:id', supplierController.getAllSupplierById);
router.post('/', supplierController.createSupplier);
router.put('/:id', supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
