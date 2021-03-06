import React from 'react';
import { Link } from 'react-router-dom'

function NavItem(props) {
  return (
    <li className="nav-item active">
      <Link to={props.to} className="nav-link pr-0">{props.label}</Link>
    </li>
  )
}

export default NavItem