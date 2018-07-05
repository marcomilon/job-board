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
        this.publishJob = this.publishJob.bind(this)
    }
    
    changeStep(e) {
        if(this.state.isValid) {
            var step = e.target.getAttribute('data-step');
            this.setState({step: parseInt(step)});
        }
    }
    
    submitJob({formData}) {
            
        this.setState({
            step: 2,
            formData: formData,
            isValid: true
        })
        
    }
    
    publishJob() {
                
        var formData = this.state.formData
        var that = this
        
        cleaner(formData.company)
        cleaner(formData.job)
        
        var companyEmail = formData.company.email
        var jobTitle = formData.job.title
        
        var companyRef = db.collection("companies").doc(companyEmail)
        var jobRef = companyRef.collection("jobs").doc(jobTitle)
        
        companyRef.set(
            formData.company
        ).then(function() {
                        
            jobRef.set(formData.job).then(function() {
                                
                db.collection("posts").add( {
                    company: companyRef,
                    job: formData.job
                })
                
                that.setState({
                    step: 3
                })
                
            })
            
        }).catch(function(error) {
            console.error("Error adding document: ", error)
        })
        
    }
    
    renderStep(step) {
        switch(step) {
            case 1:
                return <JobForm formData={this.state.formData} changeStep={this.changeStep} submitJob={this.submitJob} />
            case 2:
                return <Preview formData={this.state.formData} changeStep={this.changeStep} publishJob={this.publishJob}/>
            case 3:
                return <Publish />
            default:
                return <JobForm formData={this.state.formData} changeStep={this.changeStep} />
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