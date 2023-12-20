const express = require('express');

const usersService = require('./../services/user.service')

const router = express.Router();
const service = new usersService();

router.get('/', (req, res) => {
  const { limit , offset } = req.query;
  res.send(service.find(limit,offset))
});

module.exports = router;
