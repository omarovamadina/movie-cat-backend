const express = require('express');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const router = express.Router();

// Search Route
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q.trim();
    // Get the search query from the request parameters
    // Perform a search query in all fields of the movies
    const movies = await Movie.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { synopsis: { $regex: query, $options: 'i' } },
        { plot: { $regex: query, $options: 'i' } },
      ],
    }).select('releaseDate title landscapeImage _id');
    // Only select the necessary fields
    // Return the search results as a JSON response
    res.json(movies);
  } catch (error) {
    console.error('Error searching for movies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Movie Details Route
router.get('/:id', async (req, res) => {
    try {
      const movieId = req.params.id;
  
      // Find the movie by ID and populate the "actors" field with Actor data and role
      const movie = await Movie.findById(movieId)
        .populate({
          path: 'actors',
          populate: {
            path: 'actor',
            model: 'Actor',
            select: 'name pfp', // Specify the fields to include from the Actor model
          },
        })
        .lean();
  
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      // Remove ID fields from the movie object
      delete movie._id;
      delete movie.__v;
  
      // Return the movie information as a JSON response
      res.json(movie);
    } catch (error) {
      console.error('Error retrieving movie details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;