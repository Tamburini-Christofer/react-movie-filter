import { useState,useEffect } from 'react'

import './App.css'

const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {

    const [movies, setMovies] = useState(initialMovies);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(initialMovies);
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <>

    </>
  )
}

export default App
