import React from 'react'
import Form from 'react-jsonschema-form'
import Logo from '../../common/Logo.js'
import './job.sass'

function Job(props) {
    
    const schema = {
        "type": "object",
        "title": "Publica tu empleo",
        "properties": {
            "job": {
                "type": "object",
                "title": "Cuentanos sobre el puesto de trabajo",
                "properties": {
                    "category": {
                        "type": "string",
                        "title": "Categoria",
                        "enum": [
                            "Freelancer",
                            "Part time",
                            "Full time",
                        ]
                    },
                    "title": { 
                        "type": "string", 
                        "title": "Titulo" 
                    },
                    "place": { 
                        "type": "string", 
                        "title": "Ubicación" 
                    },            
                    "description": { 
                        "type": "string", 
                        "title": "Descripción" 
                    },
                    "howtoapply": { 
                        "type": "string", 
                        "title": "¿Como postular al trabajo?" 
                    },
                }
            },
            "company": {
                "type": "object",
                "title": "Cuentanos sobre tu empresa",
                "properties": {
                    "name": { 
                        "type": "string", 
                        "title": "Nombre" 
                    },
                    "slogan": {
                        "type": "string", 
                        "title": "Slogan de la empresa"
                    },
                    "logo": {
                        "type": "string",
                        "format": "data-url",
                        "title": "Logo"
                    },
                    "url": { 
                        "type": "string", 
                        "title": "Página de tu empresa" 
                    },
                    "email": { 
                        "type": "string", 
                        "title": "Correo electrónico" 
                    },
                    "description": {
                        "type": "string",
                        "title": "Algo más de tu empresa"
                    }
                }
            }
        }    
    };
    
    const uiSchema = {
        "job": {                
            "description": {
                "classNames": "wide-input",
                "ui:widget": "textarea",
                "ui:options": {
                    "rows": 5
                }
            },
            "howtoapply": {
                "classNames": "wide-input",
                "ui:widget": "textarea"
            }
        },
        "company": {
            "slogan": {
                "ui:widget": "textarea"
            },
            "description": {
                "classNames": "wide-input",
                "ui:widget": "textarea",
                "ui:options": {
                    "rows": 5
                }
            }
        }
    }
        
    return (             
        <div className="row ml-5 mr-5 mb-5">
            <div className="col-md-6">
                <Logo className="mt-5" />
            </div>
            <div className="col-md-12">
                <p className="mt-5 job-presentation">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="col-md-12">
                <Form className="job-form" schema={schema} uiSchema={uiSchema} onSubmit={props.submitJob}>
                    <div className="text-right">
                        <button className="btn btn-primary" type="submit">Continuar</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Job;