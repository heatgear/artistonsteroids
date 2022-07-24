import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
  faArtstation,
  faBehance,
  faInstagram,
  faLinkedin,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBlender,
  faPaintbrush,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {                 // not working currently
  //     return setTimeout(() => {
  //         setLetterClass('text-animate-hover')
  //     }, 3000)
  // }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {/*any paragarph that you want to display on about pages */}
            Hi there! I'm Yuvraj Singh, a freelance 3D character Artist and
            Environment creator.
          </p>
          <p>
            I'm a skilled professional in Blender and Substance Painter. I offer
            the following services to my clients:
            <ul>
              <li>Sculpting</li>
              <li>Texture painting</li>
              <li>Retopology</li>
              <li>Rigging</li>
              <li>Posing/Rendering</li>
            </ul>
          </p>
          <p>
            I have previously worked for my clients in making short animated
            films and to provide them with game ready 3D models/assets.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faInstagram} color="#2f2f2f" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPaintbrush} color="#2f2f2f" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faArtstation} color="#2f2f2f" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPaintRoller} color="#2f2f2f" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faYoutubeSquare} color="#2f2f2f" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBehance} color="#2f2f2f" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
