import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hi, I'm Oscar</h1>
                <p>Fullstack developer and Growth Marketer</p>
                <ul className="icons">
                    <li><a href="https://www.twitter.com/oscarjesionek" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://github.com/oscarjes/" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Software</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Marketing</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>*/}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
