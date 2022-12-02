var express = require('express');
var router = express.Router();
var db_config = require('../configs/db');
var db = db_config.db;

/* GET order  listing. */
router.post('/', function (req, res, next) {
    var key = req.body.id;
    var query = db.ref("Order");
    var orders = [];
    query.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var order = childSnapshot.toJSON();
               if(order.user_id === key){
                    orders.push(order);
               }
            });
            res.json(orders);
        });
});


module.exports = router;
