/*import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/fleetmonitor'>Fleet Monitor</Link></li>
        <li><Link to='/notifications'>Notifications/Alerts</Link></li>
        <li><Link to='/claims'>Claims</Link></li>
        <li><Link to='/reports'>Reports</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header*/

import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>
        Dashboard</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}><Link to='/fleetmonitor'>Fleet Monitor</Link>
      </NavItem>
      <NavItem eventKey={2}><Link to='/notifications'>Notifications/Alert</Link>
      </NavItem>
      <NavItem eventKey={3}><Link to='/claims'>Claims</Link>
      </NavItem>
      <NavItem eventKey={4}><Link to='/reports'>Reports</Link>
      </NavItem>
      <NavDropdown eventKey={4.1} title="Name" id="basic-nav-dropdown">
        <MenuItem eventKey={4.2}><Link to='/myaccount'>My Account</Link>
        </MenuItem>
        <MenuItem eventKey={4.3}><Link to='/fleet'>Fleet Manager</Link>
        </MenuItem>
        <MenuItem eventKey={4.4}><Link to='/settings'>Settings</Link>
        </MenuItem>
        <MenuItem eventKey={4.5}><Link to='/billing'>Billing</Link>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.6}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  </header>
)

export default Header
