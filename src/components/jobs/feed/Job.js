import React from 'react'

import JobView from './JobView'

import Preloader from './../../common/Preloader'
import Nav from './../../common/Nav'
import Footer from './../../common/Footer'

import { db } from './../../../firebase'

class Job extends React.Component {

    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            job: null,
            loaded: false
        }
    }
    
    preRender(loaded) {
        if(loaded) {
            return <JobView />
        } else {
            return <Preloader />
        }
    }
    
    componentDidMount() {
        var that = this
        
        // db.collection("company").get().doc(this.props.location.state.companyRef).then(function(doc) {
        //     console.log(doc)
        // });
    }
    
    render() {
        return (
            <div>
                <Nav menu={this.menu} />
                <div className="container pb-5">
                    {this.preRender(this.state.loaded)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Job