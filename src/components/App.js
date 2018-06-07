import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feed from './jobs/Feed'
import Login from './user/Login'
import Signin from './user/Signin'


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