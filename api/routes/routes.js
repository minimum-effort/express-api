module.exports = function(app) {
    var movie = require('../controllers/movieController');

    //Movie Routes
    app.route('/movies')
      .get(movie.list_all_movies)
      .post(movie.create_a_movie);
  
    app.route('/movies/:movieId')
      .get(movie.read_a_movie)
      .put(movie.update_a_movie)
      .delete(movie.delete_a_movie);
  };