import {Link} from 'react-router-dom'
import Header from '../Header'
import FooterItem from '../FooterItem'
import './index.css'

const Internships = () => (
  <div className="bg-container">
    <Header />
    <div className="internship-card">
      <h1>Rubixe AI Incubation Centre</h1>
    </div>
    <div className="video-card">
      <iframe
        title="video"
        className="video"
        src="https://www.youtube.com/embed/iHllyboBsFA"
        allowfullscreen
      >
        s
      </iframe>
      <div className="contant-card">
        <h1 className="service-heading1">
          An inspiring space to nurture AI ideas to business solutions and
          mentor AI starts-up to take wings.
        </h1>
        <p>
          A collaborative environment to bring AI enthusiasts, Innovators,
          domain experts and venture capitalists to create innovative solutions
          with applied AI and related technologies Our team at Rubixe AI
          Incubation center provides required support to business, on both the
          technical and investment front to nurture and build scalable AI
          solutions. We would love to listen to your Ideas on AI and to work
          with you in transforming ideas to real world solutions.
        </p>
      </div>
    </div>
    <a
      className="button-link"
      href="https://docs.google.com/forms/d/e/1FAIpQLScoVFEayXtiAEv1V1mjV7bJMNbvV7LrB75NFjCWmd_QuMBQOQ/viewform"
    >
      <button type="button" className="button button1">
        APPLY ONLINE
      </button>
    </a>
    <h1 className="service-heading1 heading">Some of our Inspiring Projects</h1>
    <div className="project-cards">
      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/projects/ai-pest-detection.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">AI WORK FORCE MANAGEMENT</p>
      </div>
      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/projects/ai-for-healthy-diet.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">AI PEST DETECTION</p>
      </div>
      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/projects/ai-for-workforce-management.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">AI FOR HEALTHY DIET</p>
      </div>
      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/projects/ai-for-hiring.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">AI FOR HIRING</p>
      </div>
    </div>
    <FooterItem />
  </div>
)

export default Internships
