import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>My path has been far from ordinary: I started out in finance (M&A consulting), then worked on a project with refugees in the Middle East for the German government and the UN. For the last few years I’ve been working in digital marketing, e.g. by being in charge of growth at <a href="https://WPCurve.com">WP Curve</a> leading up to their acquisition by GoDaddy.</p>

          <p>My current passion, which I plan to pursue for many years to come, is coding. You can read about my unexpected journey learning how to code <a href="https://medium.com/@oscarjes/how-i-fell-in--with-coding-attended-a-boot-camp-for-1k-and-built-a-startup-mvp-35a57a777f3" target="_blank">here</a>. I’ve since built a <a href="https://www.hirelyapp.com" target="_blank">B2B SaaS app</a> (currently in beta), a <a href="https://coderschool.github.io/prework" target="_blank">learning platform for developers</a>, and a <a href='https://www.producthunt.com/posts/net-worth-in-crypto' target='_blank'>fun side-project</a> that received 100+ upvotes on producthunt.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Software</h2>
          <p>I'm a fullstack Ruby on Rails & React developer. Check out some of the things I've been working on below:</p>
          <a href='https://coderschool.github.io/prework' target='_blank'><h3 className="">CoderSchool Prework (Active Project)</h3></a>
          <ul>
            <li>Learning platform for developers</li>
            <li>Frontend in React and backend Rails API</li>
            <li>Created to have a clear structure for students preparing for upcoming in-class courses</li>
            <li>Makes it easy to gain more insight into where students are getting stuck</li>
            <li>Still under development</li>
          </ul>
          <a href="https://www.hirelyapp.com" target="_blank"><h3 className="minor">Hirely</h3></a>
          <ul>
            <li>B2B SaaS App</li>
            <li>Built using Ruby on Rails & jQuery</li>
            <li>Helps businesses manage their recruitment & application pipeline</li>
            <li>Deployed on VPS with staging & production environments</li>
            <li>Currently in beta with active users</li>
          </ul>
          <a href='https://www.producthunt.com/posts/net-worth-in-crypto' target='_blank'><h3 className="">Net Worth in Crypto</h3></a>
          <ul>
            <li>Side project built using Rails in a single weekend</li>
            <li>Launched on Product Hunt and received 100+ upvotes</li>
            <li>Deployed on VPS</li>
          </ul>
          <hr />
          <p>The projects below were built for practice purposes and never deployed to production:</p>
          <a href="https://github.com/oscarjes/coderschool-coffee" target="_blank"><h3 className="minor">CoderSchool Coffee Shop</h3></a>
          <ul>
            <li>Coffee shop ordering SPA built using React & Stripe</li>
            <li>Connects to Stripe (serverless) and processes payments</li>
            <li>Deployed to Github pages</li>
          </ul>
          <a href="https://github.com/oscarjes/DuckSocial" target="_blank"><h3 className="minor">DuckSocial</h3></a>
          <ul>
            <li>Social networking app built using Rails and Bulma</li>
            <li>Deployed to Heroku</li>
          </ul>
          <a href="https://github.com/oscarjes/BanhMi362" target="_blank"><h3 className="minor">BahnMi362</h3></a>
          <ul>
            <li>Ruby on Rails restaurant website with checkout functionality</li>
            <li>Deployed to Heroku</li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Marketing</h2>
          <p>I have been in charge of growth & marketing for a few busineses, including <a href="https://wpcurve.com" target="_blank">WP Curve</a> leading up to their sale to GoDaddy. Here are some articles that will give you an idea of the work that I have done:</p>
            <ul>
              <li><a href="https://wpcurve.com/growth-hacking" target="_blank">Our exact process for managing marketing and growth at WP Curve</a></li>
              <li><a href="https://wpcurve.com/customer-segmentation-strategy/" target="_blank">Customer segmentation strategy – How to pitch based on content interest areas (WP Curve’s new lead nurture sequence)</a></li>
            </ul>
            <hr />
            <h3 className="">Marketing Projects</h3>
            <ul>
              <li>Growth @ <a href="https://www.excelrescue.net" target="_blank">Excel Rescue</a> (2017/2018)</li>
              <li>Growth & Finance @ <a href="https://www.crewfire.com" target="_blank">CrewFire</a> & <a href="https://www.simplecrew.com" target="_blank">SimpleCrew</a> (2016/2017)</li>
              <li>Growth @ <a href="https://wpcurve.com" target="_blank">WP Curve</a> (2015/2016)</li>
              <li>Marketing & Sales @ <a href="https://www.nomadcapitalist.com" target="_blank">Nomad Capitalist</a> (2014/2015)</li>
            </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main