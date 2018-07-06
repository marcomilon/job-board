import React from 'react'

import { Lines } from 'react-preloading-component'

import './preloader.sass'

function Preloader(props) {
    return (
        <div className="row mb-5">
            
            <div className="d-flex justify-content-center align-items-center container">
              <div className="preloader text-center">
                <Lines color="#dadada" />
              </div>
            </div>
            
        </div>
    )
}

export default Preloader