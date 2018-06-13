import React from 'react'
import Form from 'react-jsonschema-form'

function Job(props) {
    
    const schema = {
        type: "object",
        title: "Publica tu empleo",
        properties: {
            title: { 
                type: "string", 
                title: "Titulo" 
            },
            category: {
                type: "string",
                title: "Categoria",
                enum: [
                    "Freelancer",
                    "Part time",
                    "Full time",
                ]
            },
            place: { 
                type: "string", 
                title: "Ubicación" 
            },            
            description: { 
                type: "string", 
                title: "Descripción" 
            },
        }
    };
    
    const uiSchema = {
        title: {
            classNames: "narrow-input"
        },
        category: {
            "ui:widget": "radio",
        },
        title: {
            classNames: "narrow-input"
        }, 
        place: {
            classNames: "narrow-input"
        },                
        description: {
            "ui:widget": "textarea",
            "ui:options": {
                rows: 5
            }
        },
    }
        
    return (             
        <div className="row ml-5 mr-5">
            <div className="col-md-12">
                <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="col-md-12">
                <Form schema={schema} uiSchema={uiSchema} onSubmit={props.submitJob}>
                    <div className="text-right">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Job;