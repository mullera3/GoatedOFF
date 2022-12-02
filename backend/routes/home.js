var express = require('express');
var router = express.Router();
var  SneaksAPI = require('sneaks-api');
var sneaks = new SneaksAPI();

/* GET users listing. */
router.get('/', function (req, res, next) {
    //getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 
    var count = 200;
    sneaks.getMostPopular(count, function (error, products) {
        if (error) {
            console.log(error);
            res.send("Product Not Found");
        } else {
            res.json(products);
        }
    });
});


 router.get('/search/:shoe', function (req, res) {
     var count = req.query.count || 40; // if the user doesn't provide the query param, it defaults to 40
     sneaks.getProducts(req.params.shoe, count, function (error, products) {
         if (error) {
             console.log(error);
             res.send("Product Not Found");
         } else {
             res.json(products);
         }
     });
 });

router.get('/shoes', function (req, res) {
      sneaks.findAll(function (error, products) {
          if (error) {
              console.log(error);
              res.send("No Products In Database");
          } else {
              res.json(products);
          }
      });
  });

module.exports = router;