//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Home from './pages/home/Home'
import MovieList from './components/movieList/MovieList'
import Movie from './pages/movieDetail/Movie'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>

<BrowserRouter>
<Header />
<Routes>
    <Route  path="/" element={<Home />}/>
     <Route  path="movie/:id" element={<Movie />}/> 
     <Route  path="movies/:type" element={<MovieList />}/> 
    {/* <Route  path="/contact" element={<Contact />}/> */}
     <Route path="*" element={<h1>Error Page</h1>} />
  </Routes>
</BrowserRouter>

    </div>
  )
}

export default App
