import { useState,useEffect } from 'react'

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

  useEffect(()=>{
        const result = movies
        .filter ((movie)=> !selectedGenre || movie.genre === selectedGenre)

        .filter((movie) => !searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase())  
     );
     setFilteredMovies(result);

     },[movies, selectedGenre, searchTerm]);


  return (
    <>

    </>
  )
}

export default App
