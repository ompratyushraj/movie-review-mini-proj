import { useState, useEffect } from 'react'
import api from './api/axiosConfig'
import './App.css'

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try{
      console.log(api);
      const response = await api.get("http://localhost:8080/api/v1/movies"); 
      console.log(response.data);
      setMovies(response.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <h1>React + Spring + MongoDB</h1>
    </>
  )
}

export default App
