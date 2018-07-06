import React from 'react'

import { Redirect } from 'react-router-dom'
import moment from 'moment'

import './card.sass'

class Card extends React.Component {
    
    constructor(props) {
        super(props)
        moment.locale('es')
        this.state = {
            redirect: false
        }
        
        this.goToJob = this.goToJob.bind(this)
    }
    
    goToJob() {
        this.setState({
            redirect: true
        });
    }
    
    renderRedirect() {
        
        // var companyRef = this.props.job.companyRef.key
        // var jobRef = this.props.job.jobRef.key
        
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/job',
                state: { 
                    // companyRef: companyRef,
                    // jobRef: jobRef
                }
            }} />
        }
    }

    render() {
      return (                
          <div className="mt-2 mb-2 pt-1 pb-1 border-bottom">
            {this.renderRedirect()}
            <div onClick={this.goToJob} className="job-post">
                <div className="job-post__company">
                  {this.props.job.company}
                </div>
                <div>
                    {this.props.job.title}
                </div>
                <div className="text-right">
                    {moment(this.props.job.timestamp).fromNow()}
                </div>
            </div>
          </div>
      )
  }
  
}

export default Card