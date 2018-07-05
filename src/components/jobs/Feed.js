import React from 'react'

import Card from './Card'

import Nav from './../common/Nav'
import Footer from './../common/Footer'

import { db } from './../../firebase'

function Feed(props) {
  
    var state = {
      jobs: [
        {
          title: "title 1",
          "intro": "intro 1"
        },
        {
          title: "title 2",
          "intro": "intro 2"
        },
        {
          title: "title 3",
          "intro": "intro 4"
        }
      ]
    }

    var menu = [
      {
        to: '/post',
        label: 'Publica tu empleo'
      }
    ]
    
    //var jobs = 
  

    return (
      <div>
        <Nav menu={menu} />
        <main role="main">
          <div className="container">
            <h1 id="main-title" className="mt-5 mb-3">Empleos para ti</h1>
            
            {state.jobs.map((job) =>
              <Card title={job.title} intro={job.intro}/>
            )}
            
          </div>
        </main>
      </div>
    )

}

export default Feed