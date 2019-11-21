import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieInfo from './components/MovieInfo'

const App = () => {
  const [movies, setMovies] = useState([])

  const getDataFromAPI = async () => {
    const resp = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=3d98ffc75a5b15508c86eeac26944778'
    )

    const data = await resp.json()
    console.log(data)
    setMovies(data.results)
  }

  useEffect(() => {
    console.log('using the effect')
    // call my API
    getDataFromAPI()
  }, [])

  return (
    <>
      <h1>Brought to You by the Year 1989</h1>
      <ul>
        {movies.map(movie => {
          return (
            <MovieInfo
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              overview={movie.overview} />)
        })}
      </ul>
    </>
  )
}

export default App

