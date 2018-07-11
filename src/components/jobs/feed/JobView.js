import React from 'react'
import { Link } from 'react-router-dom'

import Job from '../post/common/Job'
import Nav from './../../common/Nav'
import Footer from './../../common/Footer'

function JobView(props) {
    console.log(props)
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <div className="mb-3">
                    <Link to='/'><i className="fas fa-arrow-left fa-sm"></i> Ver todos los trabajos</Link>
                </div>
                <Job post={props.location.state.preview}/>
            </div>
            <Footer />
        </div>
    )
}

export default JobView