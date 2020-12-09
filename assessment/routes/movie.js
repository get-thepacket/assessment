const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/movies", async (req, res) => {
  try {
    const data = await Movie.find();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.post("/addMovie", async (req, res) => {
  try {
    const { moviename, description, director, duration } = req.body;
    const movie = new Movie({
      _id: moviename.toLowerCase(),
      description: description,
      director: director,
      duration: duration,
    });
    const data = await movie.save();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/addTiming/:moviename", async (req, res) => {
  try {
    const data = await Movie.updateOne(
      { _id: req.params.moviename.toLowerCase() },
      {
        $addToSet: {
          timings: [
            {
              _id: req.body.time,
              price: req.body.price,
              totalTickets: req.body.totalTickets,
            },
          ],
        },
      }
    );
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].time === nameKey) {
      return i;
    }
  }
}

//this isnt working correctly
router.patch("/purchaseTickets/:moviename&:timing", async (req, res) => {
  try {
    var movie = req.params.moviename.toLowerCase();
    var timing = req.params.timing;
    var numberOfTickets = req.body.number;

    const data = await Movie.findOne({
      _id: movie,
    });
    console.log(data);
    var i = search(timing, data.timings);
    data.timings[i].totalTickets -= numberOfTickets;
    console.log(data.timings[i]);
    const d = await data.save();
    res.json(d);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
