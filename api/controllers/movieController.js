var mongoose = require('mongoose'),
  Movie = mongoose.model('Movies');

exports.list_all_movies = function(req, res) {
    Movie.find({}, function(err, movie) {
        if (err)
          res.send(err);
        res.json(movie);
    });
};

exports.create_a_movie = function(req, res) {
    var new_movie = new Movie(req.body);
    new_movie.save(function(err, movie) {
      if (err)
        res.send(err);
      res.json(movie);
    });
};

exports.read_a_movie = function(req, res) {
    Movie.findById(req.params.movieId, function(err, movie) {
        if (err)
          res.send(err);
        res.json(movie);
    });
};

exports.update_a_movie = function(req, res) {
    Movie.findOneAndUpdate({_id: req.params.movieId}, req.body, {new: true}, function(err, movie) {
        if (err)
          res.send(err);
        res.json(movie);
      });
};

exports.delete_a_movie = function(req, res) {
    Movie.remove({
        _id: req.params.movieId
      }, function(err, movie) {
        if (err)
          res.send(err);
        res.json({ message: 'Deleted movie. ' });
      });
};