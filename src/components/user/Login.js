import React from 'react'
import Form from 'react-jsonschema-form'
import Nav from '../common/Nav'

const schema = {
  title: "Registrate",
  type: "object",
  properties: {
    user: { 
      type: "string", 
      title: "Usuario" 
    },
    password: { 
      type: "string", 
      title: "Contraseña" 
    }
  }
};

const uiSchema = {
    password: {
      "ui:widget": "password"
    }
}

function Login(props) {
  return (
    <div>
      <Nav />                
      <div className="d-flex justify-content-center align-items-center container">
        <div className="form">
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

export default Login;