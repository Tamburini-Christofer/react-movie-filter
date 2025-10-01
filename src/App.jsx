import { useState, useEffect } from 'react'
import './App.css'

const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
  { title: "Barry Lyndon", genre: "Storico" },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const result = movies
      .filter((movie) => !selectedGenre || movie.genre === selectedGenre)
      .filter((movie) => !searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredMovies(result);
  }, [movies, selectedGenre, searchTerm]);

  const handleAddMovie = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const genre = e.target.genre.value.trim();

    if (title && genre) {
      setMovies([...movies, { title, genre }]);
    }

    e.target.reset();
  };

  return (
    <>
      <div className ="containerGeneral">
        <header>
          <h1>Filtra i tuoi film!!</h1>
          </header>
        <div className ="containerForm">
          <label>Seleziona un genere: </label>
          <select
            className="selettore"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Tutti</option>
            <option value="Fantascienza" className="Fantascienza">Fantascienza</option>
            <option value="Thriller" className="Thriller">Thriller</option>
            <option value="Romantico" className="Romantico">Romantico</option>
            <option value="Azione" className="Azione">Azione</option>
            <option value="Storico" className="Storico">Storico</option>
          </select>
        
        <div>
          <label>Cerca per titolo: </label>
          <input
            type="text"
            className="form"
            placeholder="Scrivi un titolo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <form onSubmit={handleAddMovie}>
          <div>
            <input
              name="title"
              className="contoll"
              placeholder="Titolo film"
            />
          </div>
          <div>
            <input
              name="genre"
              className="contoll"
              placeholder="Genere film"
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
        
        <listaFilm movies={filteredMovies} />
      </div>
      </div>
    </>
  );
}

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

export default App;
