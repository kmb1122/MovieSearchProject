import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

  return (
    <div>
      <footer>
        <div className="container">
            <div className="row">
                <div className="footer__wrapper">
                    <ul className="footer__links">
                        <li><p 
                        className="footer__link underline click"
                        onClick={() => navigate('/')}
                        >Home</p></li>
                        <li><p 
                        className="footer__link underline click"
                        onClick={() => navigate('/search')}
                        >Find A Movie</p></li>
                        <li><p 
                        className="footer__link underline click no-cursor"
                        >Contact</p></li>
                    </ul>
                    <div className="footer__copyright">
                        Copyright © 2026
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
