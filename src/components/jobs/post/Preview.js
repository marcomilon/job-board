import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

function Preview(props) {
    return (
        <div>
            <div className="col-md-12 mt-4">
                <div className="text-right">
                    <button type="button" className="btn btn-light mr-2">1. Crea anuncio</button>
                    <button type="button" className="btn btn-primary mr-2">2. Preview</button>
                    <button type="button" className="btn btn-light mr-2">3. Publica</button>
                </div>
            </div>
        </div>
    )
}

export default Preview