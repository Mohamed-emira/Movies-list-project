import './App.css';
import Navbar from './Component/Navbar/Navbar'
import Movielist from './Component/Movielist/Movielist';
import axios from 'axios'
import {  useEffect, useState } from 'react';
import MovieDetails from './Component/MovieDetails/MovieDetails';
import {Route,Routes,BrowserRouter}from 'react-router-dom';
function App() {
  const[movies,setMovies]=useState([])
  const[pageCount,setpageCount]=useState(0)


  //get all movies by axios
  const getAllMovies=async()=>{
  const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar')
  console.log(res.data.total_pages)
  setMovies(res.data.results)
  setpageCount(res.data.total_pages)

  }
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

useEffect(()=>{
  getAllMovies()
},[])  
//search about movies
const search=async(word)=>{
  if(word===''){
    getAllMovies()
  }else{
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
  console.log(res.data.results)
  setMovies(res.data.results)
  setpageCount(res.data.total_pages)

}

  }
  return (
    <div className="App">
        <Navbar search={search}/>  
      <BrowserRouter>
      <Routes>
  <Route  path='/' element={<Movielist movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
  <Route path='/movie/:id' element={<MovieDetails/>}/>    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
