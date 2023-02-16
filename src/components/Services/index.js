import Header from '../Header'
import FooterItem from '../FooterItem'
import './index.css'

const Services = () => (
  <div className="bg-container">
    <Header />
    <div className="service-card">
      <h1 className="service-heading">Our Services</h1>
    </div>
    <div className="each-service-card">
      <img
        src="https://rubixe.com/assets/img/services/technology-staffing.jpg"
        className="service-image"
        alt="serviceImage"
      />
      <div className="info-card">
        <h1 className="service-heading1">Technology Staffing Services</h1>
        <p className="service-description">
          Rubixe provides reliable and high-quality staffing solutions that
          offer you the ability to build your staff strength without absorbing
          them full time, assist overloaded employees during critical times, and
          keep projects moving. Unlike the traditional staffing model, Rubixe
          takes the responsibility of the work being delivered through staffing
          engagement, so the client can be sure of the deliverables in time,
          with meeting and exceeding expectations. At Rubixe, Staffing is a
          fast-growing vertical, managed by senior professionals with more than
          four decades of combined industry experience.
        </p>
      </div>
    </div>

    <div className="each-service-card">
      <div className="info-card">
        <h1 className="service-heading1">Robotic Process Automation (RPA)</h1>
        <p className="service-description">
          Robotic Process Automation (RPA) is poised to impact more than 60% of
          the IT jobs in the next 5 years. Companies consider RPA as a strategic
          competitiveness as it transforms processes to 5x productive through
          automation, directly impacting the bottom line. Rubixe team
          specializes in most popular RPA tools including BluePrism, UiPath, and
          Automation Anywhere. Our RPA services team has evolved to deliver
          solutions from analysis business process status quo to implementing
          complete RPA solutions.
        </p>
      </div>
      <img
        src="https://rubixe.com/assets/img/services/rpa.jpg"
        className="service-image"
        alt="serviceImage"
      />
    </div>

    <div className="each-service-card">
      <img
        src="https://rubixe.com/assets/img/services/machine-learning.jpg"
        className="service-image"
        alt="serviceImage"
      />
      <div className="info-card">
        <h1 className="service-heading1">AI & Machine Learning</h1>
        <p className="service-description">
          Artificial Intelligence and Machine Learning entered the mainstream
          business, disrupting existing business models through predictive
          capabilities AI and Machine Learning. There are already existing use
          cases in most of the industries from predicting churn rate in a
          telecom company, medical diagnosis to predicting consumer behavior in
          e-commerce. Rubixe has not only in-house AI consulting for top
          industries but also capability to deliver full-scale AI and Machine
          learning solutions.
        </p>
      </div>
    </div>

    <div className="each-service-card">
      <div className="info-card">
        <h1 className="service-heading1">Internet of Things (IoT)</h1>
        <p className="service-description">
          IoT has a phenomenal potential as a technology in shaping every aspect
          of human life from productivity, convenience, luxury to
          sustainability. IoT concepts were popular for more than a decade but,
          thanks to technologies such as Big Data, BlockChain, AI, and Machine
          Learning, IoT has found a vast market – projected to be $ 11 trillion
          y 2025. In the next 2 years, it is expected that about 50 billion
          devices will be connected, which is about 7 times the entire human
          population on earth. The founding team of Rubixe has been working in
          IoT solutions since 2008 for European Union and large European
          customers, through which Rubixe gained a vast knowledge base in IoT
          solutions delivery. Not sure how IoT can help or impact your business?
          get in touch with us.
        </p>
      </div>
      <img
        src="https://rubixe.com/assets/img/services/iot.jpg"
        className="service-image"
        alt="serviceImage"
      />
    </div>

    <FooterItem />
  </div>
)

export default Services
