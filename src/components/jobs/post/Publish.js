import React from 'react'
import { Link } from 'react-router-dom'

import Steps from './common/Steps'

function Publish(props) {
    return (
        <div className="row mb-5">
            
            <div className="d-flex justify-content-center align-items-center container">
              <div className="centered-box text-center">
                <h1>Excelente</h1>
                <p>
                    Antes de publicar tenemos que verificar el aviso. 
                </p>
                <p>
                    El proceso dura máximo 24 horas.
                </p>
                <Link to="/" className="btn btn-success">Ir a inicio</Link>
              </div>
            </div>
            
        </div>
    )
}

export default Publish