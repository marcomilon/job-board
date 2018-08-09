import React from 'react'

import List from './List'

import Preloader from './../../common/Preloader'
import Nav from './../../common/Nav'
import Footer from './../../common/Footer'

import { db } from './../../../firebase'

class Feed extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            jobs: [],
            loaded: false
        }
        
        this.menu = [
          {
            to: '/post',
            label: 'Publica tu empleo'
          }
        ]
    }
    
    componentDidMount() {
        
        document.title = "Jobly"
        
        var that = this
        db.collection("posts").orderBy('timestamp', "desc").get().then(function(querySnapshot) {
            var jobs = []
            querySnapshot.forEach(function(doc) {
                jobs.push(doc.data())
            })
            
            that.setState({
                jobs: jobs,
                loaded: true
            })
        });
    }
    
    preRender(loaded) {
        if(loaded) {
            return <List jobs={this.state.jobs} />
        } else {
            return <Preloader />
        }
    }
    
    render() {
        return (
          <div>
            <Nav menu={this.menu} />
            <main role="main">
              <div className="container">
                                
                {this.preRender(this.state.loaded)}
                
              </div>
            </main>
            <Footer />
          </div>
        )
    }

}

export default Feed