import {Component} from 'react'
import './index.css'
import Header from '../Header'
import FooterItem from '../FooterItem'

class ContactUs extends Component {
  state = {nameErr: '', numberErr: '', result: ''}

  changeName = event => {
    if (event.target.value === '') {
      this.setState({nameErr: 'Please Enter the Name'})
    }
  }

  changeNumber = event => {
    if (event.target.value === '') {
      this.setState({numberErr: 'Please Enter the Mobile Number'})
    }
  }

  getSuccefullSubmit = event => {
    event.preventDefault()
    this.setState({result: 'Thank You! Our team will get back to you'})
  }

  render() {
    const {nameErr, numberErr, result} = this.state

    return (
      <div className="bg-container">
        <Header />
        <div className="contact-container">
          <h1 className="service-heading1 heading">Contact Us</h1>
        </div>
        <div className="details-container">
          <h1 className="service-heading1 heading">Drop Us a Message</h1>
          <p>DO YOU HAVE A BIG IDEA WE CAN HELP WITH?</p>
        </div>
        <div className="row-container">
          <div className="icons-container">
            <div className="icon-conatiner">
              <img
                src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676569085/images_yl8y0l.png"
                className="icon-photo"
                alt="icon"
              />
              <p className="service-heading1 heading">Address</p>
              <p>
                3rd Floor, Opposite to Godavari Hotel, Kudlu Gate, Bengaluru,
                Karnataka 560068
              </p>
            </div>
            <div className="icon-conatiner">
              <img
                src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676569279/dbbvlrfwkytk1jgtgz1t.png"
                className="icon-photo"
                alt="icon"
              />
              <p className="service-heading1 heading">Phone</p>
              <p>0804-717-8999</p>
            </div>

            <div className="icon-conatiner">
              <img
                src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1676569326/dyo6oeoyso3e9cjhqrrq.png"
                className="icon-photo"
                alt="icon"
              />
              <p className="service-heading1 heading">Email</p>
              <p>hi@rubixe.com</p>
            </div>
          </div>

          <form className="form-container" onSubmit={this.getSuccefullSubmit}>
            <h1 className="service-heading1 heading">GET IN TOUCH</h1>
            <p>please complete the form and we will get back to you.</p>
            <hr className="hr1" />
            <div className="input-container">
              <div>
                <input placeholder="FULL NAME" onBlur={this.changeName} />
                <p className="err-msg">{nameErr}</p>
              </div>

              <input placeholder="EMAIL ADDRESS" />
            </div>
            <input placeholder="MOBILE NUMBER" onBlur={this.changeNumber} />
            <p className="err-msg">{numberErr}</p>
            <textarea rows="8" cols="50">
              TYPE HERE...
            </textarea>
            <button className="submitButton" type="submit">
              SEND MESSAGE
            </button>
            <p className="result">{result}</p>
          </form>
        </div>

        <div className="images-card">
          <img
            src="https://rubixe.com/assets/img/clients/c2.jpg"
            alt="capgemini"
            className="compeny-image"
          />
          <img
            src="https://rubixe.com/assets/img/clients/c6.jpg"
            alt="hp"
            className="compeny-image"
          />
          <img
            src="https://rubixe.com/assets/img/clients/c3.jpg"
            alt="hyunday"
            className="compeny-image"
          />
        </div>
        <FooterItem />
      </div>
    )
  }
}
export default ContactUs
