import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard, faBars, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    function openMenu() {
        document.body.classList.add("menu--open");
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

  return (
    <nav>
        <div className="row">
        <div className="nav__container">
            <div className="nav__logo">
                <h2 className='logo__title'>Movie Search</h2>
                <FontAwesomeIcon icon={faClapperboard} className="fa-clapperboard"/>
            </div>
            <ul className='nav__links'>
                <li><p 
                className='nav__link click underline'
                onClick={() => navigate('/')}
                >Home</p></li>
                <li><p 
                className='nav__link click underline'
                onClick={() => navigate('/search')}
                >Find A Movie</p></li>
                <li><p 
                className='nav__link click underline no-cursor'
                >Contact</p></li>
            </ul>
            <button className="btn__menu btn__menu--close click" onClick={openMenu}>
                <FontAwesomeIcon icon={faBars} className="fa-bars"/>
            </button> 
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close click" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faTimes} className="fa-times"/>
                </button>
                <ul className="menu__links">
                    <li><p 
                    className='menu__link click underline'
                    onClick={() => navigate('/')}
                    >Home</p></li>
                    <li><p 
                    className='menu__link click underline'
                    onClick={() => navigate('/search')}
                    >Find A Movie</p></li>
                    <li><p 
                    className='menu__link click underline no-cursor'
                    >Contact</p></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Nav
