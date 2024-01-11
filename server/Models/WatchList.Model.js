const mongoose = require("mongoose");

const watchListSchema = mongoose.Schema({
  userId: { type: String, required: true },
  movieId: { type: String, required: true },
  movieImg: { type: String, required: true },
});

const WatchList = mongoose.model("WatchList", watchListSchema);
module.exports = WatchList;
