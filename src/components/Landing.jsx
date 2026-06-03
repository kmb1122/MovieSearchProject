import React, { useContext, useState} from 'react'
import movie_night from '../assets/undraw_movie-night_pkvp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard, faBars, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from "../context/SearchContext"

const Landing = () => {
  const navigate = useNavigate()
  const { runSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");

  async function handleSearch() {
  if (!input.trim()) return;

  await runSearch(input.trim());   // wait for loading + movies to update
  navigate("/search");             
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <div className='landing'>
      <img className='landing__img' src={movie_night} alt="Movie night" />
      <div className='landing__container'>
        <header>
          <div className="row">
              <div className="header__container">
                  <h1 className="header__title">Find A Movie</h1>
                  <div className="header__wrapper">
                      <input 
                      type="text" 
                      placeholder="Title/Keyword" 
                      id="keywords"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}/>
                      <button className="input__btn click" onClick={handleSearch}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-magnifying-glass"/>
                      </button>
                  </div>
              </div>
          </div>
      </header>
      </div>
    </div>
  )
}

export default Landing

