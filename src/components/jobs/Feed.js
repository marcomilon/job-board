import React from 'react'
import Nav from './../common/Nav'
import Card from './Card'

class Feed extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
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
    
    this.menu = [
      {
        to: '/login',
        label: 'Profesionales'
      },
      {
        to: '/signin',
        label: 'empresas'
      }
    ]
    
  }
  
  
  render() {
    return (
      <div>
        <Nav menu={this.menu} />
        <main role="main">
          <div className="container">
            <h1 id="main-title" className="mt-5 mb-3">Empleos para ti</h1>
            
            {this.state.jobs.map((job) =>
              <Card title={job.title} intro={job.intro}/>
            )}
            
          </div>
        </main>
      </div>
    )
  }
}

export default Feed