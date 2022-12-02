var express = require("express");
var router = express.Router();
var db_config = require("../configs/db");
var db = db_config.db;
var _ = require("lodash");

/* GET order  listing. */
router.post("/", function (req, res, next) {
  var key = req.body.id;
  var query = db.ref("Sneakers");
  var sneakers = [];
  query.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var sneaker = childSnapshot.toJSON();
      if (sneaker.sold_by === key) {
        sneakers.push(sneaker);
      }
    });

    res.json(sneakers);
  });
});

router.post("/sneak", function (req, res, next) {
  var body = req.body;
  var query = db.ref("Sneakers");
  let isEqual = false;
  query.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var sneaker = childSnapshot.toJSON();
      for (const property in sneaker) {
        if (sneaker[property] === body[property] && !isEqual) {
          isEqual = true;
          childSnapshot.ref.update({
            colorway: body.colorway,
            description: body.description,
            price: body.price,
            quantity: body.quantity,
            release_date: body.release_date,
            sneaker_name: body.sneaker_name,
          });
        }
      }
    });
    if(!isEqual)
  {
      query.push().set(body);
  }
  });
  res.sendStatus(200);
});

module.exports = router;
