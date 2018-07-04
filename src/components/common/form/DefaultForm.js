import React from 'react'
import Form from 'react-jsonschema-form'

import DefaultFieldTemplate from './DefaultFieldTemplate'

function DefaultForm(props) {
    return (<Form 
                className="job-form" 
                FieldTemplate={DefaultFieldTemplate} 
                showErrorList={false} 
                noHtml5Validate={true} 
                schema={props.schema} 
                uiSchema={props.uiSchema} 
                transformErrors={props.transformErrors}
                liveValidate={true}
                onSubmit={props.onSubmit}
                formData={props.formData}
                >
                <div className="text-right">
                    <button className="btn btn-primary" type="submit">Continuar</button>
                </div>
            </Form>)
}

export default DefaultForm