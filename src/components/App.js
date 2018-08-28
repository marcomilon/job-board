import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feed from './jobs/feed/Feed'
import JobView from './jobs/feed/JobView'
import Post from './jobs/post/Post'
import Login from './user/Login'
import Signin from './user/Signin'


function App(props) {    
  return (
    <Router>
      <div>
        <Route exact path="/" component={Feed}/>
        <Route path="/post" component={Post}/>
        <Route path="/login" component={Login}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/job/:id" component={JobView}/>
      </div>
    </Router>
  )
}


export default App