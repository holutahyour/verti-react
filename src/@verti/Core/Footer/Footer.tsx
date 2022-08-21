import React from 'react'
import ContactWidget from '../Widget/ContactWidget/ContactWidget'
import LinkWidget from '../Widget/LinkWidget/LinkWidget'

function Footer() {
  return (
    <div id="footer-wrapper">
        <footer id="footer" className="container">
            <div className="row">
                <div className="col-3 col-6-medium col-12-small">
                    <LinkWidget />                        
                </div>
                <div className="col-3 col-6-medium col-12-small">
                    <LinkWidget /> 
                </div>
                <div className="col-3 col-6-medium col-12-small">
                    <LinkWidget />
                </div>
                <div className="col-3 col-6-medium col-12-small"> 
                    <ContactWidget />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div id="copyright">
                        <ul className="menu">
                            <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer