import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {                 // not working currently
  //     return setTimeout(() => {
  //         setLetterClass('text-animate-hover')
  //     }, 3000)
  // }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in freelance opportunities - especially large
            projects such as 3D games and Animation Films.
          </p>
          <p>
            However my portfolio is quite diverse and I offere a variety of
            services such as models for 3D printing, book cover renders, theme
            based models, 3D social media content and other good stuff.
          </p>
          <p>
            Feel free to Contact me if you have any questions using the form
            below.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="name" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
