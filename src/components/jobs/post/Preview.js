import React from 'react'

import Steps from './common/Steps'
import Job from './common/Job'

function Preview(props) {
    return (
        <div className="row mb-5">
            
            <Steps changeStep={props.changeStep}  active={2} />
            
            <div className="col-md-12 mt-4 border-bottom mb-4">
                <p className="job-presentation">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            <Job post={props.post}/>
            
            <div className="col-md-12 text-right">
                <button type="button" className="btn btn-success" onClick={props.publishJob}>Publica</button>
            </div>
            
        </div>
    )
}

export default Preview