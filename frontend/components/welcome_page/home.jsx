import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './header_container'

const Home = () => (
  <div className="welcome">
    <HeaderContainer /> 
    {/* <h1>Welcome Page</h1> */}
    
    <section className="section-one">
      <div className="main-img">
        <img src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png" />
      </div>
      <div className="main-text">
        <h1>Where Work </h1>
        <h1 className="second">Happens</h1>
        <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
        <form>
          {/* <input type="text" placeholder="Email address" value=""/> */}
          <Link to="/signup">
            <button className="get-started" type="submit">GET STARTED</button>
          </Link>
        </form>
        <p>Already using Slack? <span><Link to="/login">Sign in.</Link></span></p> 
      </div>
    </section>

    <section className="section-two">
      section-two
    </section>

    <footer>
      <div className="footer-nav">footer-nav</div>
      <div className='footer-term'>footer-term</div>
    </footer>

  </div>
)

export default Home;