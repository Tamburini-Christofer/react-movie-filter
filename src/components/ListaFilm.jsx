function listaFilm({ movies }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index} className={movie.genre}>
          {movie.title} - <em>{movie.genre}</em> - <em>{movie.year}</em>
        </li>
      ))}
    </ul>
  );
}

export default listaFilm;