import React from 'react';

function Card(props) {
  return (                
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.intro}</p>
          <div className="text-right">
              <a href="#" className="card-link mr-auto">Card link</a>
          </div>
        </div>
      </div>
  )
}

export default Card