const express = require("express");
const router = express.Router();
const WatchList = require("../Models/WatchList.Model");
router.use(express.json());

// Add movie to WatchList
router.post("/watchlist", async (req, res) => {
  const { userId, movieId, movieImg } = req.body;
  console.log(req.body);
  try {
    const watchlistItem = await WatchList.create({ userId, movieId, movieImg });
    console.log(watchlistItem);
    res.json(watchlistItem);
  } catch (error) {
    res.status(500).json({ error: "Error adding to watchlist" });
  }
});

router.get("/watchlist/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const watchlist = await WatchList.find({ userId });
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: "Error fetching watchlist" });
  }
});

// Delete a movie from the watchlist
router.delete("/watchlist/:userId/:movieId", async (req, res) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;
  console.log(movieId);
  try {
    const result = await WatchList.deleteOne({ userId: userId, movieId: movieId });
    if (result.deletedCount === 1) {
      res.json({ message: "Movie deleted successfully" });
    } else {
      res.status(404).json({ error: "Movie not found in watchlist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting movie from watchlist" });
  }
});

module.exports = router;
