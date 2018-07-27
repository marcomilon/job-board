import React from 'react'

import { Redirect, Link } from 'react-router-dom'
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
        //var jobRef = this.props.job.jobRef.path
        
        var preview = {
            job: this.props.job.job,
            company: this.props.job.company,
        }
                
        if (this.state.redirect) {
            return <Redirect push={true} to={{
                pathname: '/job/' + this.props.job.slug,
                state: { 
                    preview: preview
                }
            }} />
        }
    }

    render() {
      return (                
          <li className="mt-3 pb-3 pt-1 border-bottom">
            <Link to={'/job/' + this.props.job.slug} className="job-post">
                <span className="job-post__company">
                  {this.props.job.companyName}
                </span>
                <span>
                    {this.props.job.title}
                </span>
                <span className="text-right">
                    {moment(this.props.job.timestamp).fromNow()}
                </span>
            </Link>
          </li>
      )
  }
  
}

export default Card