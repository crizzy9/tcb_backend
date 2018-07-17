const express = require('express');
const router = express.Router();

// should come from model
var foods = [
    { "id": 1, "name": "Donuts" },
    { "id": 2, "name": "Pizza" },
    { "id": 3, "name": "Tacos" }
  ];
   
  var books = [
    { "title": "Hitchhiker's Guide to the Galaxy" },
    { "title": "The Fellowship of the Ring" },
    { "title": "Moby Dick" }
  ];
   
  var movies = [
    { "title": "Ghostbusters" },
    { "title": "Star Wars" },
    { "title": "Batman Begins" }
  ];

router.get('/', function(req, res) {
    res.send("THIS IS playground");
});

// the GET "books" API endpoint
router.get('/api/books', function (req, res) {
    res.send(books);
});
 
// the GET "movies" API endpoint
router.get('/api/movies', function (req, res) {
    res.send(movies);
});
 
// the GET "foods" API endpoint
router.get('/api/food', function (req, res) {
    res.send(foods);
});

// POST endpoint for creating a new food
router.post('/api/food', function (req, res) {
    // calculate the next ID
    let id = 1;
    if (foods.length > 0) {
        let maximum = Math.max.apply(Math, foods.map(function (f) { return f.id; }));
        id = maximum + 1;
    }
    let new_food = {"id": id, "name": req.body.name};
    foods.push(new_food);
    res.send(new_food);
});

// PUT endpoint for editing food
router.put('/api/food/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    f.name = req.body.name;
    res.send(f);
});
 
// DELETE endpoint for deleting food
router.delete('/api/food/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    foods = foods.filter(x => x.id != id);
    res.send(f);
});

module.exports = router