import React from 'react'

import Card from './Card'

function List(props) {    
    return (
        <div>
            <h1 id="main-title" className="mt-5 mb-5">Empleos para ti</h1>
            {props.jobs.map((job) =>
              <Card job={job} />
            )}
        </div>
    )
}

export default List