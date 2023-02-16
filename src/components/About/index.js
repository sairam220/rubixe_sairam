import './index.css'
import Header from '../Header'
import FooterItem from '../FooterItem'

const About = () => (
  <div className="bg-container">
    <Header />
    <div className="about-card">
      <h1 className="curv-heading1">Who We Are</h1>
    </div>
    <div className="about-us-card">
      <img
        src="https://rubixe.com/assets/img/aboutus/about-us.jpg"
        className="abou-image"
        alt="aboutImage"
      />
      <div>
        <h1 className="service-heading1 heading">A Bit About Us</h1>
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market. Started in
          2008, providing technology solutions based in the Netherlands,
          founders of Rubixe™ have gained expertise in cutting-edge technology
          through delivering several smart city solutions for European
          Commission (EC) projects. At Rubixe™, we make your business more
          efficient, more predictable and more effective, turning complex
          challenges into solutions by leveraging disruptive technologies,
          providing a strategic competitive advantage. We serve clients in most
          industries including Banking & Finance, Retail, e-commerce,
          healthcare, logistics et., We have the capability to deliver solutions
          to clients of all sizes across the globe.{' '}
        </p>
      </div>
    </div>
    <div className="management-card">
      <h1 className="service-heading1 heading">The Management Team</h1>
      <p>
        At Rubixe™, we make your business more efficient, more predictable and
        more effective, turning complex challenges into solutions by leveraging
        disruptive technologies, providing a strategic competitive advantage. We
        serve clients in most industries including Banking & Finance, Retail,
        e-commerce, healthcare, logistics et., We have the capability to deliver
        solutions to clients of all sizes across the globe.
      </p>
    </div>
    <div className="empolyees-profiles">
      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/home/ashok1.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">Ashok Kumar A</p>
        <p className="role">Founder & CEO</p>
      </div>

      <div className="project-card">
        <img
          src="https://rubixe.com/img/deepak-profile.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">Deepak D</p>
        <p className="role">Program Manager</p>
      </div>

      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/home/ranjith.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">Ranjith Kumar J</p>
        <p className="role">Director Technology</p>
      </div>

      <div className="project-card">
        <img
          src="https://rubixe.com/assets/img/home/shiva.jpg"
          className="project-image"
          alt="projectImage"
        />
        <p className="service-heading1">Shiva PS</p>
        <p className="role">Director Marketing</p>
      </div>
    </div>
    <FooterItem />
  </div>
)

export default About
