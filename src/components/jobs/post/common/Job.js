import React from 'react'

function Job(props) {
    console.log(props)
    return (
        <div>
            <div className="col-md-12 border-bottom pb-4 mb-4">
            
                <h1>{props.post.job.title}</h1>
                
                <h4>{props.post.company.name}</h4>
                
                {props.post.company.slogan !== undefined &&
                    <p className="mb-0">{props.post.company.slogan}</p>
                }
                            
                <p className="mb-0">{props.post.job.place}</p>
                
                {props.post.company.url !== undefined &&
                    <p>
                        <a href="{props.post.company.url}" className="font-weight-bold">{props.post.company.url}</a>
                    </p>
                }
                
                {props.post.company.description !== undefined &&
                    <div>
                        <h5>Sobre la empresa</h5>
                        <p>{props.post.company.description}</p>
                    </div>
                }
                
            </div>
            
            <div className="col-md-12">
                <h5>Descripción del empleo</h5>
                {props.post.job.category !== undefined &&
                    <p>Modalidad: <span className="font-weight-bold">{props.post.job.category}</span></p>
                }
                <p className="job-description">
                {props.post.job.description}
                </p>
            </div>
            
            <div className="col-md-12 bg-light p-3 mb-5">
                <h5 className="mb-3">Postula a este trabajo</h5>
                <p>
                    {props.post.job.howtoapply}
                </p>
            </div>
        </div>
    )
}

export default Job