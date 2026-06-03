import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search'

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/movie/:imdbID' element={<Movie />}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
