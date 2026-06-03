import React from 'react'
import couch__img from '../assets/undraw_horror-movie_9020.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Landing from '../components/Landing'


const Home = () => {
    const scaleFactor = 1 / 20;

    function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

  return (
    <>
        <Landing/>
        <div className='home__page' onMouseMove={moveBackground}>
            <FontAwesomeIcon icon={faCirclePlay} className="shape fcpY fcp1"/>
            <FontAwesomeIcon icon={faCirclePlay} className="shape fcpG fcp3"/>
            <FontAwesomeIcon icon={faCirclePlay} className="shape fcpY fcp2"/>
            <FontAwesomeIcon icon={faCirclePlay} className="shape fcpG fcp4"/>
            <div className="row">
                <div className="home__wrapper">
                    <figure className="home__img">
                        <img className="couch__img" src={couch__img}/>
                    </figure>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
