import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import MapWithControlledZoom from './FleetMonitor'
import Notifications from './Notifications'
import Claims from './Claims'
import Reports from './Reports'
import Account from './Account'
import Settings from './Settings'
import Billing from './Billing'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/fleetmonitor' component={MapWithControlledZoom}/>
      <Route path='/notifications' component={Notifications}/>
      <Route path='/claims' component={Claims}/>
      <Route path='/reports' component={Reports}/>
      <Route path='/myaccount' component={Account}/>
      <Route path='/fleet' component={MapWithControlledZoom}/>
      <Route path='/settings' component={Settings}/>
      <Route path='/billing' component={Billing}/>
    </Switch>
  </main>
)

export default Main
