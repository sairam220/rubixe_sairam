import './index.css'
import Header from '../Header'
import FooterItem from '../FooterItem'

const Blog = () => (
  <div className="bg-container">
    <Header />
    <div className="blog-card">
      <h1 className="curv-heading1">Blog</h1>
    </div>
    <img
      src="https://rubixe.com//assets/img/blog/AI-Blog.jpg"
      alt="aitrends"
      className="ai-image"
    />
    <div className="ai-content">
      <h1>AI Trends For 2020</h1>
      <p>
        AI is here and it does not look like it is going to wear off any time
        soon. In a tech-driven environment, we all are experiencing an
        astounding growth of AI technology with so many new uses. The advanced
        use of AI technology is changing the way people live and work. This blog
        speaks about the top 12 AI trends to watch in 2020. In short, 2020 will
        be an exciting year for AI development.
      </p>
      <hr />
    </div>
    <FooterItem />
  </div>
)

export default Blog
