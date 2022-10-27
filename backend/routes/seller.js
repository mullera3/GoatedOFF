var express = require('express');
var router = express.Router();
var db_config = require('../configs/db');
var db = db_config.db;

/* GET order  listing. */
router.post('/', function (req, res, next) {
    var key = req.body.id;
    var query = db.ref("Sneakers");
    var sneakers = [];
    query.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var sneaker = childSnapshot.toJSON();
                console.log(sneaker);
                if (sneaker.sold_by === key) {
                    sneakers.push(sneaker);
                }
            });
            res.json(sneakers);
        });
});

module.exports = router;