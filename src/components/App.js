import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feed from './jobs/feed/Feed'
import Job from './jobs/feed/Job'
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
        <Route path="/job/:id" component={Job}/>
      </div>
    </Router>
  )
}


export default App