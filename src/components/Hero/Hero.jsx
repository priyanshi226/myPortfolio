import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            {/* <h2>Hey! I am <br/> Priyanshi Gupta</h2> */}
            <h2>
  <span className="typing-text">Hey! I am</span>
  <br />
  <span className="typing-text">Priyanshi Gupta</span>
</h2>

            <p>
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions.
            </p>

            <div className='skill-icons'>
            <div className='tech-icon'>
            <img className = 'tech-icons-image'
                src = "./assets/images/reactLogo.png" />
            </div>

            <div className='tech-icon'>
            <img className = 'tech-icons-image'
                src = "./assets/images/htmlLogo.png" />
            </div>

            <div className='tech-icon'>
            <img className = 'tech-icons-image'
                src = "./assets/images/cssLogo.png" />
            </div>

            <div className='tech-icon'>
                <img className = 'tech-icons-image'
                id = "js-logo"
                src = "./assets/images/jsLogo.png" />
            </div>
        </div>
        </div>

        <div className='hero-img'>
                <img src = "./assets/images/picture.png" alt=""
                className='picture'/>
        </div>
    </section>
  )
}

export default Hero