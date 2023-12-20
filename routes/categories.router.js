const express = require('express');

const router = express.Router();
const categoriesService = require('./../services/category.service')

const service = new categoriesService();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(service.findOne(categoryId,productId))
});

module.exports = router;
