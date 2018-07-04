import React from 'react'

import Steps from './common/Steps'

function Publish(props) {
    return (
        <div className="row mb-5">
            
            <div className="d-flex justify-content-center align-items-center container">
              <div className="centered-box text-center">
                <h1>Excelente</h1>
                <p>
                    Antes de publicar tenemos que verifiar el aviso. El proceso dura máximo 24 horas.
                </p>
                <a className="btn btn-success" href="/">Ir a inicio</a>
              </div>
            </div>
            
        </div>
    )
}

export default Publish