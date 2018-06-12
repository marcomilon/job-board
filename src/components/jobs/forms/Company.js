import React from 'react'
import Form from 'react-jsonschema-form'

function Company(props) {
    
    const schema = {
        title: "Perfíl de tu empresa",
        type: "object",
        properties: {
            logo: { 
                type: "string", 
                title: "Logo" 
            },
            company: { 
                type: "string", 
                title: "Empresa" 
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
        },
        logo: {
            "ui:widget": "file"
        }
    }
    
    return (        
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-5">
                    <Form schema={schema} uiSchema={uiSchema}>
                        <div className="text-right">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
    
}

export default Company;