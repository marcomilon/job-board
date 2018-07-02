import React from 'react'
import Logo from './Logo.js'
import { Link } from 'react-router-dom'
import NavItem from './NavItem.js'

function Nav(props) {
  return ( 
      <header>
          <div id="navbarHeader">
              <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light pl-0">
                      <Link to="/" className="navbar-brand"><Logo /></Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ml-auto">
                          
                              {props.menu && props.menu.map((menu) =>
                                <NavItem to={menu.to} label={menu.label}/>
                              )}
                              
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </header>
    )
}

export default Nav;