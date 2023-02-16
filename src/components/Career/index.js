import './index.css'
import Header from '../Header'
import FooterItem from '../FooterItem'

const Career = () => (
  <div className="bg-container">
    <Header />
    <div className="join-our-team">
      <h1>JOIN OUR TEAM</h1>
    </div>
    <div className="job-cards">
      <div className="job-card">
        <h1> >Business Analyst</h1>
        <h1>Job Description:</h1>
        <p>Years of Experience: 1 Year</p>
        <p>The ideal candidate for this position should be able to</p>
        <h1>Responsibilities</h1>
        <p>
          Analyze the requirements from the business perspective, how it uses
          technology and what its goals are Do market research and formulate
          strategies to improve the product proposition Persuade internal and
          external stakeholders in product development Able to formulate and
          execute marketing strategies Own to product development Good
          understanding of how a market place work.
        </p>
      </div>

      <div className="job-card">
        <h1> >Digital Marketing Manager</h1>
        <h1> Job Description:</h1>
        <p>Experience: 2-5 years</p>
        <p>
          The ideal candidate will have at least 2 years of experience in
          managing end to end digital marketing practice.
        </p>
        <h1>Responsibilities</h1>
        <p>
          Strategize, plan and execute digital marketing campaigns Manage the
          effectiveness of digital marketing channels including, Google ads,
          Facebook, Instagram, Twitter, Youtube etc., Monitor and analyze the
          effectiveness of marketing activities and share reports/dashboards to
          the management. Manage website content relevant to digital marketing
          activities. Managing the marketing team, set the targets, ensure the
          skills match, conduct regular training sessions etc.,
        </p>
      </div>
    </div>

    <div className="weare-hiring-card">
      <h1 className="curv-heading">We are Hiring </h1>
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

export default Career
