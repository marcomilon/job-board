import React from 'react'
import { Link } from 'react-router-dom'

import JobPreview from '../common/JobPreview'
import Nav from './../../common/Nav'
import Footer from './../../common/Footer'

function JobView(props) {
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <div className="mb-3">
                    <Link to='/'><i className="fas fa-arrow-left fa-sm"></i> Ver todos los trabajos</Link>
                </div>
                <JobPreview company={props.location.state.preview.company} job={props.location.state.preview.job}/>
            </div>
            <Footer />
        </div>
    )
}

export default JobView