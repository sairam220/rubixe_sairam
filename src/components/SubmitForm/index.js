import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'
import FooterItem from '../FooterItem'

const SubmitForm = props => {
  const {history} = props
  const getBackToHome = () => {
    history.replace('/')
  }

  return (
    <div className="bg-container">
      <Header />
      <div className="submit-card">
        <h1 className="submit-heading">Thank You!</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="submitImage"
          className="sumbit-image"
        />
        <p className="submit-para">
          The Form was submitted successfully and we'll be in touch very soon..
        </p>
        <button type="button" onClick={getBackToHome} className="button">
          BACK TO HOME
        </button>
      </div>
      <FooterItem />
    </div>
  )
}

export default SubmitForm
