import React from 'react'
import Form from 'react-jsonschema-form'

function Job(props) {
    
    const schema = {
        title: "Publica tu empleo",
        type: "object",
        properties: {
            title: { 
                type: "string", 
                title: "Titulo" 
            },
            description: { 
                type: "string", 
                title: "Descripción" 
            }
        }
    };
    
    const uiSchema = {
        description: {
            "ui:widget": "textarea"
        }
    }
    
    return (             
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-5">
                    <Form schema={schema} uiSchema={uiSchema} onSubmit={props.submitJob}>
                        <div className="text-right">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Job;