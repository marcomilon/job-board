import React from 'react'

import Steps from './common/Steps'

function Preview(props) {
    return (
        <div className="row mb-5">
            <Steps changeStep={props.changeStep}  active={2} />
            <div className="col-md-12 mt-4">
                <p className="job-presentation">
                    Preview
                </p>
            </div>
            <div className="col-md-12">
                
            </div>
        </div>
    )
}

export default Preview