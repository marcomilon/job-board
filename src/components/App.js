import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from './Nav'
import Feed from './Feed'
import Card from './Card'
import Login from './Login'
import Signin from './Signin'


function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Feed}/>
        <Route path="/login" component={Login}/>
        <Route path="/signin" component={Signin}/>
      </div>
    </Router>
  )
}


export default App