import React, { useState } from 'react';
import './style.css';
import './styleAbout.css';
import './styleSkill.css';
import './styleProjects.css';
import './styleContact.css'
import './styleFooter.css'
import logo from './images/logowithout.png';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import langLogo from './images/html,css,js.png';
import frontendDev from './images/forntend-dev.png';
import aboutMe from './images/aboutme.png';
import whatCanIDo from './images/what.png'
import RecipeImg from './images/recipeMaster.jpg'
import barber from './images/barber2.png'
import weatherImg from './images/weather.jfif'
import ecom from './images/ecomerce.jpg'
import game from './images/ticTacToe.jpg'
import mail from './images/mailIcon.png'
import github from './images/githubIcon.png'
import insta from './images/instaIcon.png'
import facebook from './images/facebookIcon.png'
import Swal from 'sweetalert2'
import { InView } from 'react-intersection-observer';


const Eweblify = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const object = {
      ...formData,
      access_key: "1f08ff7c-f6d9-4adc-8902-5b2b96672227"
    };

    const json = JSON.stringify(object);

    try {

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success",
          text: "Message Sent",
          icon: "success"
        });

        resetForm();
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="header" id='home'>
          <div id="logo">
            <img src={logo} alt="logo" draggable={false} />
          </div>
          <div className="head-txt">
            <h1>
              WEB <br /> <span>DEVELOPMENT</span>
            </h1>
            <p>Hi, My Name Is Hamid I Am A Website Developer And I Am Here To Help You.</p>
          </div>
          <div className="card-sec">
            <div className="card card1">
              <img src={card2} alt="" draggable="false" />
            </div>
            <div className="card card2">
              <img src={card1} alt="" draggable="false" />
            </div>
            <div className="card card3">
              <img src={card3} alt="" draggable="false" />
            </div>
          </div>
          <div className="lang-logo">
            <img src={langLogo} alt="img" />
          </div>
        </div>
      </div>

      <nav id="navbar">
        <ul>
          <li><a href="#home" className="underline-animation">Home</a></li>
          <li><a href="#about" className="underline-animation">About</a></li>
          <li><a href="#skills" className="underline-animation">Skills</a></li>
          <li><a href="#projects" className="underline-animation">Projects</a></li>
          <li><a href="#contact" className="underline-animation">Contact</a></li>
        </ul>
      </nav>

      <div className="aboutSec" id='about'>
        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`img im2 ${inView ? 'reveal' : ''}`} ref={ref}>
              <img src={aboutMe} alt="About Me" />
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`content con2 ${inView ? 'reveal' : ''}`} ref={ref}>
              <h1>About Me</h1>
              <p>
                Hey there, This is <b style={{ color: 'red' }}>Hamid</b> and I welcome you to my <span>Portfolio Website</span> Where you can see my <em>skills</em> and my <em>projects</em>. My <b>goal</b> is to build websites that not only look great but also provide seamless experiences for users. With 6 months of experience in the web development field, I have worked on projects ranging from small personal websites to complex applications.
              </p>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`content con ${inView ? 'reveal' : ''}`} ref={ref}>
              <h1>
                Website <br /> <span>Development</span>
              </h1>
              <p>
                I am a passionate Website Developer with experience in building modern and responsive websites. My expertise lies in creating dynamic user interfaces using <span>HTML, CSS, JavaScript, React.js, and Node.js.</span>
              </p>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`img im ${inView ? 'reveal' : ''}`} ref={ref}>
              <img src={frontendDev} alt="Frontend Development" />
            </div>
          )}
        </InView>
      </div>

      <div className="skillSec" id='skills'>
        <h1>My Skills</h1>
        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`skills ${inView ? 'reveal' : ''}`} ref={ref}>
              <div className="skill">
                <div className="skill-name">HTML</div>
                <div className="skill-bar">
                  <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                </div>
              </div>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`skills ${inView ? 'reveal' : ''}`} ref={ref}>
              <div className="skill">
                <div className="skill-name">CSS</div>
                <div className="skill-bar">
                  <div className="skill-per" per="80%" style={{ maxWidth: '80%' }}></div>
                </div>
              </div>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`skills ${inView ? 'reveal' : ''}`} ref={ref}>
              <div className="skill">
                <div className="skill-name">JAVASCRIPT</div>
                <div className="skill-bar">
                  <div className="skill-per" per="65%" style={{ maxWidth: '65%' }}></div>
                </div>
              </div>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`skills ${inView ? 'reveal' : ''}`} ref={ref}>
              <div className="skill">
                <div className="skill-name">React.js</div>
                <div className="skill-bar">
                  <div className="skill-per" per="70%" style={{ maxWidth: '70%' }}></div>
                </div>
              </div>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`skills ${inView ? 'reveal' : ''}`} ref={ref}>
              <div className="skill">
                <div className="skill-name">Node.js</div>
                <div className="skill-bar">
                  <div className="skill-per" per="65%" style={{ maxWidth: '65%' }}></div>
                </div>
              </div>
            </div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.3}>
  {({ inView, ref }) => (
    <div className="expertiesSec">
      <div className={`experties ${inView ? 'reveal' : ''}`} ref={ref}>
        <h1>Look What Can I Do?</h1>
        <ul>
          <li>Responsive Web Design</li>
          <li>Dynamic Websites</li>
          <li>Backend</li>
          <li>Frontend Development Using HTML, CSS, JavaScript, React.js</li>
          <li>Web Animations</li>
          <li>Performance Optimization</li>
        </ul>
      </div>
      <div className={`expertiesImg ${inView ? 'reveal' : ''}`} ref={ref}>
        <img src={whatCanIDo} alt="What can I do" />
      </div>
    </div>
  )}
</InView>

      </div>

      <div className="projectSec" id='projects'>
        <h1>Projects</h1>
        <div className="projectArea">
          <InView triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <div
                className={`projectbox ${inView ? 'reveal' : ''}`}
                ref={ref}
                style={{ animationDelay: '0s' }}
              >
                <a href="https://github.com/EWeblify/RecipeMaster.git" target="_blank">
                  <div className="project">
                    <img src={RecipeImg} alt="RecipeMaster" />
                    <div className="hover-overlay">
                      <h2 className="hover-text">RecipeMaster</h2>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </InView>

          <InView triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <div
                className={`projectbox ${inView ? 'reveal' : ''}`}
                ref={ref}
                style={{ animationDelay: '0.2s' }} 
              >
                <a href="https://github.com/EWeblify/BarberShop.git" target="_blank">
                  <div className="project">
                    <img src={barber} alt="Barber Shop" />
                    <div className="hover-overlay">
                      <h2 className="hover-text">Barber Shop</h2>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </InView>

          <InView triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <div
                className={`projectbox weatherBox ${inView ? 'reveal' : ''}`}
                ref={ref}
                style={{ animationDelay: '0.4s' }}  // 0.4s delay for third box
              >
                <a href="https://github.com/EWeblify/CheckWeather.git" target="_blank">
                  <div className="project">
                    <img src={weatherImg} alt="Weather Check" />
                    <div className="hover-overlay">
                      <h2 className="hover-text">Weather Check</h2>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </InView>

          <InView triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <div
                className={`projectbox ecomBox ${inView ? 'reveal' : ''}`}
                ref={ref}
                style={{ animationDelay: '0.6s' }}
              >
                <a href="https://github.com/EWeblify/Myntra-Clone.git" target="_blank">
                  <div className="project">
                    <img src={ecom} alt="Ecommerce Web" />
                    <div className="hover-overlay">
                      <h2 className="hover-text">Ecommerce Web</h2>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </InView>

          <InView triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <div
                className={`projectbox ecomBox ${inView ? 'reveal' : ''}`}
                ref={ref}
                style={{ animationDelay: '0.8s' }}
              >
                <a href="https://github.com/EWeblify/Tic-Tac-Toe-Game.git" target="_blank">
                  <div className="project">
                    <img src={game} alt="Tic Tac Toe" />
                    <div className="hover-overlay">
                      <h2 className="hover-text">Tic Tac Toe</h2>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </InView>
          <InView triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <div className={`projectbox project-more ${inView ? 'reveal' : ''}`} ref={ref} style={{ animationDelay: '0.8s' }}>
                <div className="pro-more-box">
                  <h2>If you want to know more about my projects</h2>
                  <button className='pro-btn'><a href="#contact">Learn More</a></button>
                </div>
              </div>
            )}
          </InView>
        </div>
      </div>

      <div id='contact' className="contactSec">
        <div className="contact-left">
          <h1>Let's chat Together</h1>
          <h1>Tell me about the website you want.</h1>
            <div className="contacts">
              <span><img src={mail} alt="icon" /></span>
              <span>
                <p>Mail me at</p>
                <p><a href="mailto:eweblify@gmail.com" target='_blank'>eweblify@gmail.com</a></p>
              </span>
            </div>
            <div className="contacts">
              <span><img src={github} alt="icon" /></span>
              <span>
                <p>My github account</p>
                <p><a href="https://github.com/eweblify" target='_blank'>EWeblify (Github)</a></p>
              </span>
            </div>
            <div className="contacts">
              <span><img src={insta} alt="icon" /></span>
              <span>
                <p>My Instagram account</p>
                <p><a href="https://www.instagram.com/" target='_blank'>EWeblify (Instagram)</a></p>
              </span>
            </div>
            <div className="contacts">
              <span><img src={facebook} alt="icon" /></span>
              <span>
                <p>My Facebook account</p>
                <p><a href="https://www.facebook.com/" target='_blank'>EWeblify (Facebook)</a></p>
              </span>
          </div>
        </div>

        <InView triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div className={`contact-right ${inView ? 'reveal' : ''}`} ref={ref}>
              <h2>Send a message</h2>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="contact-input"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button className="contact-btn" type="submit">Submit</button>
              </form>
            </div>
          )}
        </InView>
      </div>

      <footer className="footer" id='footer'>
        <div className="footer-left-right">
        <div className="footer-left">
          <img src={logo} alt="footer-logo" draggable="false" />
        </div>
        <div className="footer-right">
          <div className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          </div>
          <div className="footer-links-sec">
            <a href="https://www.instagram.com/" target="_blank">
            <img src={insta} alt="" className='footer-links insta-link'/>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt=""className='footer-links facebook-link'/>
            </a>
            <a href="mailto:eweblify@gmail.com" target="_blank">
            <img src={mail} alt="" className='footer-links mail-link'/>
            </a>
            <a href="https://github.com/eweblify" target="_blank">
            <img src={github} alt="" className='footer-links github-link'/>
            </a>
          </div>
        </div>
        </div>
        <div className="footer-copyright">
          <p>© 2024 EWeblify | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Eweblify;