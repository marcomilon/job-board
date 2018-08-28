import React from 'react'

import Card from './Card'

function List(props) {    
    return (
        <div className="pb-4 mb-4">
            <h1 id="main-title" className="mt-5 mb-5">Empleos para ti</h1>
            <ul>
            {props.jobs.map((job) =>
              <Card job={job} />
            )}
            </ul>
        </div>
    )
}

export default List