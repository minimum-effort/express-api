const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'myapp',
  password: 'Master1',
  port: 5432,
})

const list_all_movies = (request, response) => {
    pool.query('SELECT * FROM movies ORDER BY movie_id ASC', (error, results) => {
        if (error) {
          console.log(error);
        }else{
          response.json(results.rows)
        }
    })
}

const create_a_movie = (request, response) => {
    const { name, rating } = request.body

    pool.query('INSERT INTO movies (name, rating) VALUES ($1, $2)', [name, rating], (error, results) => {
        if (error) {
          console.log(error);
        }else{
          response.send('Movie added. ')
        }
    })
}
  
const read_a_movie = (request, response) => {
    const movie_id = parseInt(request.params.movieId)

    pool.query('SELECT * FROM movies WHERE movie_id = $1', [movie_id], (error, results) => {
        if (error) {
          console.log(error);
        }else{
        response.json(results.rows)
        }
    })
}
  
const update_a_movie = (request, response) => {
    const movie_id = parseInt(request.params.movieId)
    const { name, rating } = request.body

    pool.query(
        'UPDATE movies SET name = $1, rating = $2 WHERE movie_id = $3',
        [name, rating, movie_id],
        (error, results) => {
        if (error) {
          console.log(error);
        }else{
        response.json("Movie updated")
        }
      }
    )
}
  
const delete_a_movie = (request, response) => {
  const movie_id = parseInt(request.params.movieId)

    pool.query('DELETE FROM movies WHERE movie_id = $1', [movie_id], (error, results) => {
        if (error) {
          console.log(error);
        }else{
        response.status(200).send('Movie deleted')
        }
    })
}
  
module.exports = {
    list_all_movies,
    create_a_movie,
    read_a_movie,
    update_a_movie,
    delete_a_movie
}