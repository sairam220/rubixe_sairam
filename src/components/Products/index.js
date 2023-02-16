import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'
import FooterItem from '../FooterItem'

const Products = () => (
  <div className="bg-container">
    <Header />
    <div className="product-container">
      <h1 className="service-heading">Our Products</h1>
    </div>
    <div className="products-acrd">
      <img
        src="https://rubixe.com/assets/img/products/chatbot.png"
        alt="productImage"
        className="product-image"
      />
      <div className="product">
        <h1 className="service-heading1">Rubixe Chatbot</h1>
        <hr className="hr" />
        <p>
          The chatbots disruption is unleashing a wide gamut of applications
          from healthcare assistance to transforming entire BPO industry build
          on customer support services. With the advances in the field of
          Natural Language Processing (NLP) and TTS (Text to Speech), Chatbots
          have become more natural and replacing the need for humans for
          customer support in the first line. Rubixe has developed a versatile
          Chatbot platform, which can be customized to the business of any
          industry in a matter of a few days, given that we have related chat
          data from the past chat history. It is proven that Chatbots have
          gained a better customer satisfaction as compared to human beings,
          with a fraction of cost. Interested? get in touch with us for a live
          demo.
        </p>
      </div>
    </div>
    <div className="products-acrd">
      <div className="product">
        <h1 className="service-heading1">ai4commerce</h1>
        <hr className="hr" />
        <p>
          ai4commerce is an artificial intelligence software residing in the
          e-commerce site, which calculates the probability of products
          purchased for website visitors and shows only products which have high
          buying probability. It is proven that this enhances sales by at least
          20% over a period of time and, thus, is very effective in adding
          significant positive value to the business. This is a plug and play
          production in an e-commerce portal and has a wide feature pipeline.
        </p>
      </div>
      <img
        src="https://rubixe.com/assets/img/products/Ai4commerce.jpg"
        alt="productImage"
        className="product-image"
      />
    </div>
    <div className="contact-card">
      <h1 className="service-heading1">
        Would You Like To Learn More About Our Business?
      </h1>
      <Link to="/contact">
        <button type="button" className="button">
          CONTACT US NOW
        </button>
      </Link>
    </div>
    <FooterItem />
  </div>
)

export default Products
