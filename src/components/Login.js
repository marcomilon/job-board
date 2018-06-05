import React from 'react'
import Form from "react-jsonschema-form"

const schema = {
  title: "Registrate",
  type: "object",
  properties: {
    user: { type: "string", title: "Usuario" },
    password: { type: "string", title: "Contraseña" }
  }
};

function Login(props) {
  return (                
    <div className="container">
      <div>
        <Form schema={schema} />
      </div>
    </div>
  )
}

export default Login;