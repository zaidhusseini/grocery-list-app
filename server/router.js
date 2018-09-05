const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const {save, retrieve} = require('../database/index.js');

router.use(bodyParser.json());

router.post('/add', (req, res)=>{
  console.log('here is request body', req.body);
  save(req.body,res);
})

router.get('/retrieve', (req, res)=>{
  retrieve(res);
})

module.exports = router;