import {Route, Switch} from 'react-router-dom'
import Products from './components/Products'
import Home from './components/Home'
import Internships from './components/Internships'
import Services from './components/Services'
import Career from './components/Career'
import './App.css'
import Blog from './components/Blog'
import About from './components/About'
import ContactUs from './components/ContactUs'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/incubation" component={Internships} />
    <Route path="/career" component={Career} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/contact-us" component={ContactUs} />
  </Switch>
)

export default App
