import React from 'react'

import './jobPreview.sass'

function Job(props) {
    return (
        <div>
            <div className="border-bottom pb-4 mb-4">
                <div className="row">
                    <div className="col-md-8">
                    <h1>{props.job.title}</h1>
                    
                    <h4>{props.company.name}</h4>
                    
                    {props.company.slogan !== undefined &&
                        <p className="mb-0">{props.company.slogan}</p>
                    }
                                
                    <p className="mb-0">{props.job.place}</p>
                    
                    {props.company.url !== undefined &&
                        <p>
                            <a href="{props.company.url}" className="font-weight-bold">{props.company.url}</a>
                        </p>
                    }
                    
                    {props.company.description !== undefined &&
                        <div>
                            <h5 className="mt-5 font-weight-bold">Sobre la empresa</h5>
                            <p>{props.company.description}</p>
                        </div>
                    }
                    </div>
                    <div className="col-md-4">                        
                        {props.job.published ? (
                            <img src={props.job.logoUrl} className="company-logo"/>
                        ) : (
                            <img src={company.logo} className="company-logo"/>
                        )}
                    </div>
                </div>
                
            </div>
            
            <div>
                <h5 className="mt-5 font-weight-bold">Descripción del empleo</h5>
                {props.job.category !== undefined &&
                    <p>Modalidad: {props.job.category}</p>
                }
                <p className="job-description">
                {props.job.description}
                </p>
            </div>
            
            <div className="bg-light p-3 mt-5 jobPreview__footer">
                <h5 className="mb-3">Postula a este trabajo</h5>
                <p>
                    {props.job.howtoapply}
                </p>
            </div>
            
        </div>
    )
}

export default Job