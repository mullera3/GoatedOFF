var express = require('express');
var router = express.Router();
var db_config = require('../configs/db');
var db = db_config.db;
var _ = require('lodash');

/* GET users listing. */
 router.post('/', function (req, res, next) {

  var query = db.ref("User").orderByKey();

  query.once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.toJSON();
        user.id = childSnapshot.key;
        if ((user.Email.toLowerCase() == req.body.username.toLowerCase()) & (user.Password ==req.body.password)){
        res.json(user);
        }
      });
    });
});

router.get('/admin', function (req, res, next) {
  let users = [];
  var query = db.ref("User").orderByKey();

  query.once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.toJSON();
        users.push(user);
      });
     res.json(users);
    });
});

router.get("/report", function (req, res, next) {
  let data = {}
  var query = db.ref("Sneakers");

  query.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var user = childSnapshot.toJSON();
      console.log(user)
      if(!data.hasOwnProperty(user.sold_by)){
        console.log(data)
        data[user.sold_by]  = 1;
      } else{


        data[user.sold_by] += 1;
      }
    });
                console.log(data);
    res.json(Object.entries(data));
  });
});

router.post('/delete', function (req, res, next) {
  var currentUser = req.body;
  var query = db.ref("User").orderByKey();

  query.once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.toJSON();
        if (_.isEqual(currentUser, user)) {
          db.ref("User").child(childSnapshot.key).remove();
          res.sendStatus(200);
        }
      });
    });
});

router.post("/newAccount", function (req, res, next) {
  var newUser = req.body;
  var query = db.ref("User").push(newUser);
});



module.exports = router;
