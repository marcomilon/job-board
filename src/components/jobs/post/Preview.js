import React from 'react'

import Steps from './common/Steps'

function Preview(props) {
    return (
        <div className="row mb-5">
            <Steps changeStep={props.changeStep}  active={2} />
            <div className="col-md-12 mt-4 border-bottom mb-4">
                <p className="job-presentation">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="col-md-12 border-bottom pb-4 mb-4">
            
                <h1>{props.formData.job.title}</h1>
                
                <h4>{props.formData.company.name}</h4>
                
                {props.formData.company.slogan !== undefined &&
                    <p className="mb-0">{props.formData.company.slogan}</p>
                }
                            
                <p className="mb-0">{props.formData.job.place}</p>
                
                {props.formData.company.url !== undefined &&
                    <p>
                        <a href="{props.formData.company.url}" className="font-weight-bold">{props.formData.company.url}</a>
                    </p>
                }
                
                {props.formData.company.description !== undefined &&
                    <div>
                        <h5>Sobre la empresa</h5>
                        <p>{props.formData.company.description}</p>
                    </div>
                }
                
            </div>
            
            <div className="col-md-12">
                <h5>Descripción del empleo</h5>
                {props.formData.job.category !== undefined &&
                    <p>Modalidad: <span className="font-weight-bold">{props.formData.job.category}</span></p>
                }
                <p className="job-description">
                {props.formData.job.description}
                </p>
            </div>
            
            <div className="col-md-12 bg-light p-3 mb-5">
                <h5 className="mb-3">Postula a este trabajo</h5>
                <p>
                    {props.formData.job.howtoapply}
                </p>
            </div>
            
            <div className="col-md-12 text-right">
                <button type="button" className="btn btn-success">Publica</button>
            </div>
        </div>
    )
}

export default Preview