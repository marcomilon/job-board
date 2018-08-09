import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './../../common/Nav'
import Footer from './../../common/Footer'

import Preloader from './../../common/Preloader'
import JobPreview from '../common/JobPreview'

import { db } from './../../../firebase'

class JobView extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            job: null,
            company: null,
            loaded: false,
            slug: props.match.params
        }
        
        this.menu = [
          {
            to: '/post',
            label: 'Publica tu empleo'
          }
        ]
    }
    
    componentDidMount() {
        var that = this
        db.collection("posts").where("slug", "==", this.state.slug.id).limit(1).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                that.setState({
                    job: doc.data().job,
                    company: doc.data().company,
                    loaded: true,
                })
            })
        });
    }
    
    render() {
        return (
            <div>
                <Nav menu={this.menu} />
                <div className="container mt-5">
                    
                    {this.state.loaded &&
                      <React.Fragment>
                        <div className="mb-3 text-right">
                            <Link to='/'><i className="fas fa-arrow-left fa-sm"></i> Ver todos los trabajos</Link>
                        </div>
                        <JobPreview company={this.state.company} job={this.state.job}/>
                      </React.Fragment>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default JobView