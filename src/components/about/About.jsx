import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
    return ( 
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>300+ Worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderActive className='about_icon'/>
                            <h5>Projects</h5>
                            <small>8+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias quas, optio eaque libero ipsam provident consectetur sunt expedita aperiam explicabo nobis nisi molestias culpa ratione praesentium! Illum, veritatis accusamus!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About