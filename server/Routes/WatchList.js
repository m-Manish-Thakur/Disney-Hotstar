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

module.exports = router;
