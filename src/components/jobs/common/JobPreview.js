import React from 'react'

function Job(props) {
    return (
        <div>
            <div className="border-bottom pb-4 mb-4">
            
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
                        <h5>Sobre la empresa</h5>
                        <p>{props.company.description}</p>
                    </div>
                }
                
            </div>
            
            <div>
                <h5>Descripción del empleo</h5>
                {props.job.category !== undefined &&
                    <p>Modalidad: <span className="font-weight-bold">{props.job.category}</span></p>
                }
                <p className="job-description">
                {props.job.description}
                </p>
            </div>
            
            <div className="bg-light p-3 mt-5 mb-5">
                <h5 className="mb-3">Postula a este trabajo</h5>
                <p>
                    {props.job.howtoapply}
                </p>
            </div>
            
        </div>
    )
}

export default Job