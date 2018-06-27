import React from 'react'
import Form from 'react-jsonschema-form'
import DefaultFieldTemplate from './DefaultFieldTemplate'

function JobsForm(props) {
    return (<Form 
                className="job-form" 
                FieldTemplate={DefaultFieldTemplate} 
                showErrorList={false} 
                noHtml5Validate={true} 
                schema={props.schema} 
                uiSchema={props.uiSchema} 
                transformErrors={props.transformErrors}
                liveValidate={true}>
                <div className="text-right">
                    <button className="btn btn-primary" type="submit">Continuar</button>
                </div>
            </Form>)
}

export default JobsForm