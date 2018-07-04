import React from 'react'

function Steps(props) {
    return (
        <div className="col-md-12 mt-4">
            <div className="text-right">
                <button type="button" className={props.active === 1 ? 'btn btn-primary mr-2' : 'btn btn-light mr-2'}  data-step="1" onClick={props.changeStep}>1. Crea anuncio</button>
                <button type="button" className={props.active === 2 ? 'btn btn-primary mr-2' : 'btn btn-light mr-2'}  data-step="2" onClick={props.changeStep}>2. Preview</button>
                <button type="button" className={props.active === 3 ? 'btn btn-primary mr-2' : 'btn btn-light mr-2'}  data-step="3" onClick={props.changeStep}>3. Publica</button>
            </div>
        </div>
    )
}

export default Steps