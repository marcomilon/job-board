import React from 'react'

import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'

import './card.sass'

function Card(props) {
    
    moment.locale('es')
    
    return (                
        <li className="mt-3 pb-3 pt-1 border-bottom">
            <Link to={'/job/' + props.job.slug} className="job-post">
                <span>
                  {props.job.companyName}
                </span>
                <span>
                    {props.job.title}
                </span>
                <span className="text-right">
                    {moment(props.job.timestamp).format("MMM DD")}
                </span>
            </Link>
        </li>
    )
  
}

export default Card