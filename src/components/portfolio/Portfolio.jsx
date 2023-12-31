import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={IMG1} alt="" />
          </div>
          <h3>SIVA</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/AyushKumar378/SIVA" className="btn" target='_blank'>Github</a>
          <a href=" " className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={IMG2} alt="" />
          </div>
          <h3>FRESH-BAGEL</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/AyushKumar378/FRESH-BAGEL" className="btn" target='_blank'>Github</a>
          <a href=" " className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={IMG3} alt="" />
          </div>
          <h3>Attendance-using-Facial-Recognition </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/AyushKumar378/Attendance-using-Facial-Recognition" className="btn" target='_blank'>Github</a>
          <a href=" " className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio