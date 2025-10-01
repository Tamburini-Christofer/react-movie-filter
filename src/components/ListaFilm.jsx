
function listaFilm({ movies }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          {movie.title} - <em>{movie.genre}</em>
        </li>
      ))}
    </ul>
  );
}

export default listaFilm;