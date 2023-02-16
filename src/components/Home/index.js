import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import FooterItem from '../FooterItem'
import './index.css'

class Home extends Component {
  state = {nameErr: '', numberErr: '', result: '', emilErr: '', isSubmit: false}

  changeName = event => {
    if (event.target.value === '') {
      this.setState({nameErr: '*Please Enter the Name'})
    }
  }

  changeNumber = event => {
    if (event.target.value === '') {
      this.setState({numberErr: '*Please Enter the Mobile Number'})
    }
  }

  cahngeMail = event => {
    if (event.target.value === '') {
      this.setState({emilErr: '*Please Enter the mail Id'})
    }
  }

  submitForm = event => {
    const {history} = this.props
    event.preventDefault()
    this.setState({isSubmit: true})
    history.replace('/successful-submit')
  }

  render() {
    const {nameErr, numberErr, emilErr} = this.state
    return (
      <div className="bg-container">
        <Header />
        <div className="student-card">
          <h1 className="techonology-heading">TECH TEENS</h1>
          <p className="technology-para">
            CARVING FUTURE TECHNOLOGY PROFESSIONAL OUT OF YOUNG MINDS
          </p>
        </div>
        <div className="tech-card">
          <div className="tech-content">
            <h1>WHO WE ARE</h1>
            <p>
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). Rubixe™ mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.turning complex challenges into the solutions.providing
              a stratagic compitetive advantage that are the most
              efficent,effictive and predictable
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676553013/images_rbg4ml.jpg"
            className="tech-image1"
            alt="techImage"
          />
        </div>

        <div className="pink-card">
          <h1>WHERE WE STARTED</h1>
          <p>
            We started in 2015. With a passionate team who want to bring
            game-changing solutions thorugh disruptive technologies. We
            expertise in delivering enterprice-level solutions in the field
            Artificial Intelligence(AI), Cyber Security,Robotic Process
            Automation(RPA),Internet Of Things(IoT) and BlockChain Technology
          </p>
        </div>

        <h1 className="tech-h1">TECH FOR TEENS A-RUBIXE INTIATIVE</h1>

        <div className="ai-ml-cards">
          <div className="project-card">
            <img
              src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676528554/images_s2zzlb.jpg"
              className="project-image"
              alt="projectImage"
            />
            <p className="service-heading1">
              Introducing AI to childer in an age in certain Manner
            </p>
          </div>

          <div className="project-card">
            <img
              src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676560036/ybduvnrhxnm4ocuyhpsl.jpg"
              className="project-image"
              alt="projectImage"
            />
            <p className="service-heading1">
              Gain Awerness on AI and build an Interactive story around it
            </p>
          </div>

          <div className="project-card">
            <img
              src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676560013/toz1ysuyrsmcq1v43nqp.jpg"
              className="project-image"
              alt="projectImage"
            />
            <p className="service-heading1">
              Acqire programming skills in an user-friendly format
            </p>
          </div>

          <div className="project-card">
            <img
              src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676560108/gsib1pm6ut7mnh4abqxr.jpg"
              className="project-image"
              alt="projectImage"
            />
            <p className="service-heading1">
              Exposure mini project on diverse topics
            </p>
          </div>

          <div className="project-card">
            <img
              src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676560088/d87o930sugj8qdxvsn2x.jpg"
              className="project-image"
              alt="projectImage"
            />
            <p className="service-heading1">Train the teachers programme</p>
          </div>
        </div>

        <form className="form-container1" onSubmit={this.submitForm}>
          <div className="touch-card">
            <h1>GET IN TOUCH</h1>
            <p>Please complete the form and we will get back to you.</p>
          </div>
          <hr />
          <div className="input-container2">
            <label htmlFor="name">NAME*</label>
            <input
              id="name"
              placeholder="Enter Your Name"
              onBlur={this.changeName}
            />
            <p className="err-msg">{nameErr}</p>
            <label htmlFor="email">EMAIL*</label>
            <input
              id="email"
              placeholder="Enter Your Mail"
              onBlur={this.cahngeMail}
            />
            <p className="err-msg">{emilErr}</p>
            <label htmlFor="number">MOBILE NUMBER</label>
            <input
              id="number"
              placeholder="Enter Your Mobile Number"
              onBlur={this.changeNumber}
            />
            <p className="err-msg">{numberErr}</p>
            <button type="submit" className="button-form">
              REGISTER NOW
            </button>
          </div>
        </form>

        <FooterItem />
      </div>
    )
  }
}
export default Home
