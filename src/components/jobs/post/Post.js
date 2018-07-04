import React from 'react'
import Form from 'react-jsonschema-form'

import JobForm from './JobForm'
import Preview from './Preview'
import Publish from './Publish'

import Nav from '../../common/Nav'
import Footer from '../../common/Footer'

import { db } from '../../../firebase'

var cleaner = require('deep-cleaner')

class Post extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            isValid: false
        }
        this.submitJob = this.submitJob.bind(this)
        this.changeStep = this.changeStep.bind(this)
    }
    
    submitJob({formData}) {
        console.log(formData)
        
        var that = this
        cleaner(formData.company)
        cleaner(formData.job)
        
        var companyEmail = formData.company.email
        var jobTitle = formData.job.title
        
        // db.collection("companies").doc(companyEmail).set(
        //     formData.company
        // ).then(function() {
        //     var docRef = db.collection("companies").doc(companyEmail)
        //     docRef.collection("jobs").doc(jobTitle).set(formData.job)
        //     that.setState({
        //         step: 2,
        //         formData: formData,
        //         isValid: true
        //     })
        // }).catch(function(error) {
        //     console.error("Error adding document: ", error)
        // })
        
        that.setState({
            step: 2,
            formData: formData,
            isValid: true
        })
    }
    
    changeStep(e) {
        if(this.state.isValid) {
            var step = e.target.getAttribute('data-step');
            this.setState({step: parseInt(step)});
        }
    }
    
    renderStep(step) {
        switch(step) {
            case 1:
                return <JobForm formData={this.state.formData} changeStep={this.changeStep} />
            case 2:
                return <Preview changeStep={this.changeStep} formData={this.state.formData} />
            case 3:
                return <Publish />
            default:
                return <JobForm formData={this.state.formData} submitJob={this.submitJob} changeStep={this.changeStep} />
        }
    }
    
    render() {
        return (
            <div>
                <Nav menu={this.menu} />
                <div className="container pb-5">
                    {this.renderStep(this.state.step)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Post;