import React from 'react'

import Job from '../post/common/Job'
import Nav from './../../common/Nav'
import Footer from './../../common/Footer'

function JobView(props) {
    console.log(props)
    return (
        <div>
            <Nav />
            <div className="container mt-5">
                <Job post={props.location.state.preview}/>
            </div>
            <Footer />
        </div>
    )
}

export default JobView