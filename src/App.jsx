import { useState, useEffect } from "react";
import ListaFilm from "./components/ListaFilm";
import "./App.css";
import initialMovies from "./listaFilmArray";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");

useEffect(() => {
  const result = movies
    .filter((movie) => !selectedGenre || movie.genre === selectedGenre)
    .filter(
      (movie) =>
        !searchTitle ||
        movie.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
    .filter(
      (movie) =>
        !searchYear || movie.year.toString().includes(searchYear)
    );
    setFilteredMovies(result);
  }, [movies, selectedGenre, searchTitle, searchYear]);

  const handleAddMovie = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const genre = e.target.genre.value.trim();
    const year = e.target.year.value.trim();

    if (title && genre && year) {
      setMovies([...movies, { title, genre, year}]);
    }

    e.target.reset();
  };

  return (
    <>
      <div className="containerGeneral">
        <header>
          <h1>Filtra i tuoi film!!</h1>
        </header>
        <div className="containerForm">
          <div className="selettore">
            <label>Seleziona un genere: </label>
            <select
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">Tutti</option>
              <option value="Fantascienza" className="Fantascienza">
                Fantascienza
              </option>
              <option value="Thriller" className="Thriller">
                Thriller
              </option>
              <option value="Romantico" className="Romantico">
                Romantico
              </option>
              <option value="Azione" className="Azione">
                Azione
              </option>
              <option value="Storico" className="Storico">
                Storico
              </option>
              <option value="Drammatico" className="Drammatico">
                Drammatico
              </option>
            </select>
          </div>

          <div className="selettore">
            <label>Cerca per titolo: </label>
            <input
              type="text"
              className="form"
              placeholder="Scrivi un titolo"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <div className="selettore">
            <label>Cerca per anno: </label>
            <input
              type="text"
              className="form"
              placeholder="Scrivi l'anno"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
            />
          </div>

          <form onSubmit={handleAddMovie}>
            <div className="selettore" >
              <input
                name="title"
                className="contoll"
                placeholder="Titolo film"
              />
              <input
                name="genre"
                className="contoll"
                placeholder="Genere film"
              />
              <input
                name="year"
                className="contoll"
                placeholder="Genera anno"
              />
            <button type="submit">Aggiungi</button>
            </div>
          </form>
          <div className="listaFilm">
            <ListaFilm movies={filteredMovies} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
