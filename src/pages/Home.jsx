import React, { useState } from 'react';
import "./CSS/Home.css";
import ProjectInfo from "../Components/ProjectInfo/ProjectInfo.jsx";
import profilePhoto from "../assets/profilephoto.jpg";
import computer from "../assets/computer.png";
import { FaArrowDown, FaPhone, FaBars} from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <a href="#home" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#About" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <div className="close-icon"><RxCross2/></div> : <FaBars  />}
          </div>
        </nav>
      </header>

      <section id="home">
        <div id="profilephoto">
          <img src={profilePhoto} alt="Profile Photo" className="profile-photo" />
        </div>
        <div id="Myinfo-container">
          <div className="My-info">
            <p>Hello, I'm</p>
            <h1>Chinmay Kulkarni</h1>
            <p>Full-Stack Developer</p>
            <a href="#projects">My Projects <FaArrowDown /></a>
          </div>
        </div>
      </section>

      <section id="About">
        <div id="About-Before">ABOUT</div>
        <div className="About-img-container">
          <img src={computer} alt="Computer" />
        </div>
        <div className="About-info-container">
          <div className="skills-container">
            <div className="skills">
              <h4>Frontend</h4>
              <p>HTML,</p>
              <p>CSS,</p>
              <p>JavaScript,</p>
              <p>React.js</p>
            </div>
            <div className="skills">
              <h4>Backend</h4>
              <p>Node.js,</p>
              <p>Express.js,</p>
              <p>REST API,</p>
              <p>JWT</p>
            </div>
            <div className="skills">
              <h4>Database</h4>
              <p>MongoDB,</p>
              <p>MySQL</p>
            </div>
          </div>
          <div className="skills-info">
            <span>
              As a Full Stack Developer, I have the unique capability to manage and
              oversee all aspects of web development, from crafting beautiful and
              intuitive user interfaces to designing robust and efficient back-end
              systems. My journey in this field has equipped me with a diverse skill
              set and a deep understanding of both front-end and back-end
              technologies.
            </span>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className='projects-before'>MY WORK</div>
        <ProjectInfo
          Title="Nature Gallery"
          Description={`Free Stock Photos
  - High quality images
  - Nature and wildlife
  - Free to use for any project.`}
          Languages={
            "HTML, CSS, React.js, Node.js, Express.js, MongoDB, Cloudinary."
          }
          projectLink="https://nature-gallery.vercel.app/"
          githubLink="https://github.com/Chinmayk19/Nature-Gallery"
        />
        <ProjectInfo
          Title="PokeAPI"
          Description={
            "API for accessing Pokémon data - Fetches data from the PokeAPI - Utopia was utilized to ensure responsive typography and layout."
          }
          Languages={"HTML, CSS, Utopia, Next.js."}
          projectLink="https://poke-api-iota-umber.vercel.app/"
          githubLink="https://github.com/Chinmayk19/PokeAPI"
        />
      </section>

      <section id="contact">
        <p>Get in Touch</p>
        <h2>Contact Me</h2>
        <div className="contact-details">
          <p className="contact-info"><FaPhone /> +91 7507358772</p>
          <p className="contact-info">
            <IoMdMail />
            <a href="mailto:ckulkarni198@gmail.com">ckulkarni198@gmail.com</a>
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Chinmay Kulkarni.</p>
      </footer>
    </>
  );
}

export default Home;
