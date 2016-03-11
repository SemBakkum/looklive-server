var express = require('express');
var router = express.Router();
var fs = require('fs');
var lazy = require('lazy-modules');

router.get('/', function(req, res, next) {
    console.time('lazy-load'); lazy('resources/feed.json'); console.timeEnd('lazy-load');
    fs.readFile('resources/feed.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        res.render('feed', { title: 'Feed', items: JSON.parse(data) });
    })
});

router.get('/appearance/:uuid', function(req, res, next) {
    fs.readFile('resources/appearance/'+req.params.uuid+'.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data);
        var products = [];

        item.product_occurrences.forEach(function(occurrence) {
            var product = fs.readFileSync('resources/product/'+occurrence.product.id+'.json', 'utf8');
            products.push(JSON.parse(product));
        });

        console.log(products);

        res.render('appearance', { title: item.title, item: item , products: products});
    })
});

module.exports = router;
