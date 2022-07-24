import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { motion } from 'framer-motion'
import images from '../../images'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'PORTFOLIO'.split('')}
            idx={15}
          />
        </h1>
        <motion.div className="carousel">
          <motion.div
            // drag="x"                                // in case motion framer sliding portfolio is needed
            // dragConstraints={{ right: 0 }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item">
                  <img src={image} alt="" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
