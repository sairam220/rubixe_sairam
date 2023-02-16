import './index.css'
import Header from '../Header'
import FooterItem from '../FooterItem'

const ContactUs = () => (
  <div className="bg-container">
    <Header />
    <div className="contact-container">
      <h1 className="service-heading1 heading">Contact Us</h1>
    </div>
    <div className="row-container">
      <div className="details-container">
        <h1 className="service-heading1 heading">Drop Us a Message</h1>
        <p>DO YOU HAVE A BIG IDEA WE CAN HELP WITH?</p>
        <div className="icon-conatiner">
          <h1>Address</h1>
          <p>
            3rd Floor, Opposite to Godavari Hotel, Kudlu Gate, Bengaluru,
            Karnataka 560068
          </p>
        </div>
        <div className="icon-conatiner">
          <h1>Phone</h1>
          <p>0804-717-8999</p>
        </div>

        <div className="icon-conatiner">
          <h1>Email</h1>
          <p>hi@rubixe.com</p>
        </div>
      </div>

      <div className="form-container">
        <h1 className="service-heading1 heading">GET IN TOUCH</h1>
        <p>please complete the form and we will get back to you.</p>
        <div className="input-container">
          <input placeholder="FULL NAME" />
          <input placeholder="EMAIL ADDRESS" />
        </div>
        <input placeholder="MOBILE NUMBER" />
        <textarea rows="8" cols="50">
          TYPE HERE...
        </textarea>
        <button>SEND MESSAGE</button>
      </div>
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

export default ContactUs
