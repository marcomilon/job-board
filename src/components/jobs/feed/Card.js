import React from 'react';

import moment from 'moment';

import './card.sass'

class Card extends React.Component {
    
    constructor(props) {
        super(props)
        moment.locale('es')
    }
    
    goToJob() {
        console.log("Go")
    }

    render() {
      return (                
          <div className="mt-2 mb-2 pt-1 pb-1 border-bottom">
            <div onClick={this.goToJob} className="job-post">
                <div className="job-post__company">
                  {this.props.job.company}
                </div>
                <div>
                    {this.props.job.job}
                </div>
                <div className="text-right">
                    {moment(this.props.job.timestamp).fromNow()}
                </div>
            </div>
          </div>
      )
  }
  
}

export default Card