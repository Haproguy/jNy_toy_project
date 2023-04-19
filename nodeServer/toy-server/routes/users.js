var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const arrival = req.body;
  const uri1 = `http://swopenAPI.seoul.go.kr/api/subway/`;
  const apiKey = '4b6965764370726f32377250684c56/';
  const uri2 = 'json/realtimeStationArrival/0/5/'

  var assembleUri = uri1 + apiKey + uri2 + encodeURI(arrival.arrival);
  request(assembleUri, function (error, response, body) {
    if (error) {
      console.log(error)
    } else {
      res.json(body);
    }
  })
});

module.exports = router;
