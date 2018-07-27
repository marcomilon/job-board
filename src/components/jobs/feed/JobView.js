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
    }
    
    componentDidMount() {
        console.log(this.state.slug.id)
        var that = this
        db.collection("posts").where("slug", "==", this.state.slug.id).limit(1).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data().company);
                that.setState({
                    job: doc.data().job,
                    company: doc.data().company,
                    loaded: true,
                })
            })
        });
    }
    
    preRender(loaded) {
        if(loaded) {
            return <JobPreview company={this.state.company} job={this.state.job}/>
        } else {
            return <Preloader />
        }
    }
    
    render() {
        return (
            <div>
                <Nav />
                <div className="container mt-5">
                    <div className="mb-3">
                        <Link to='/'><i className="fas fa-arrow-left fa-sm"></i> Ver todos los trabajos</Link>
                    </div>
                    
                    {this.preRender(this.state.loaded)}
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default JobView