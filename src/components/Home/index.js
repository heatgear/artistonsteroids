import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a.png' /* importing images of artist on steroids logo from assets */
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'a',
    'r',
    't',
    'i',
    's',
    't',
    'o',
    'n',
    's',
    't',
    'e',
    'r',
    'o',
    'i',
    'd',
    's',
  ]
  const jobArray = [
    '3',
    'D',
    ' ',
    'c',
    'h',
    'a',
    'r',
    'a',
    'c',
    't',
    'e',
    'r',
    ' ',
    'a',
    'r',
    't',
    'i',
    's',
    't',
  ]

  // useEffect(() => {                         //not working currently
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hi,</span>{' '}
            {/* manually animating the Hi I'm part*/}
            <span className={`${letterClass} _12`}></span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* artistonsteroids */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <img src={LogoTitle} alt="developer" />{' '}
            {/*LogoTitle is the image /logo on the homescreen */}
            {/* 3D Artist */}
          </h1>
          <h2>3D character artist / Environment Creator</h2>
          <Link to="/contact" className="flat-button">
            {' '}
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home
