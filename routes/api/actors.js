const express = require('express');
const router = express.Router();
const proxyCtrl = require('../../controllers/api/proxy');
const actorsCtrl = require('../../controllers/api/actors');

/* Attach our cors proxy to the existing API on the /proxy endpoint. */
router.get('/actors/:proxyUrl*', proxyCtrl.proxyURL);
router.get('/actors', actorsCtrl.actorList);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;