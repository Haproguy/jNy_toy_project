var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const arrival = req.body;
  const url = `http://swopenAPI.seoul.go.kr/api/subway/4b6965764370726f32377250684c56/json/realtimeStationArrival/0/5/${arrival}`;
  express.request({
    uri: url,
    method: 'GET'
  })
  res.json({
    hello: 'say hello!'
  });
});

module.exports = router;
