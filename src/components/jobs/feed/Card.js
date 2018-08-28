import React from 'react'

import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'

import './card.sass'

function Card(props) {
    
    moment.locale('es')
    
    return (                
        <li>
            <Link to={'/job/' + props.job.slug} className="job-post">
                <span className="job-img">
                {props.job.logoUrl && 
                    <img className="job-img" src={props.job.logoUrl} className="job-post-img"/>
                }
                </span>
                <div className="job-info">
                    <span>
                      {props.job.companyName}
                    </span>
                    <span>
                        {props.job.title}
                    </span>
                    <span className="text-right">
                        {moment(props.job.timestamp).format("MMM DD")}
                    </span>
                </div>
            </Link>
        </li>
    )
  
}

export default Card