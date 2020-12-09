const mongoose = require("mongoose");
const schema = mongoose.Schema;

const timing = schema({
  _id: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  totalTickets: {
    type: Number,
    required: false,
  },
});

const movie = schema({
  _id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  timings: [timing],
});

module.exports = mongoose.model("Movie", movie);
