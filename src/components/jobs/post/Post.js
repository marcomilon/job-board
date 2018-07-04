import React from 'react'
import Form from 'react-jsonschema-form'

import JobForm from './JobForm'
import Preview from './Preview'

import Nav from '../../common/Nav'
import Footer from '../../common/Footer'

import { db } from '../../../firebase'

class Post extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {step: 1}
        this.submitJob = this.submitJob.bind(this)
        this.changeStep = this.changeStep.bind(this)
    }
    
    submitJob({formData}) {
        console.log(formData);
        // db.collection("jobs").add({
        //     title: formData.title,
        //     description: formData.description
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id)
        //     props.history.push('/company')
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error)
        // });
    }
    
    changeStep(e) {
        var step = e.target.getAttribute('data-step');
        this.setState({step: parseInt(step)});
    }
    
    renderStep(step) {
        switch(step) {
            case 1:
                return <JobForm submitJob={this.submitJob} changeStep={this.changeStep} />
            case 2:
                return <Preview changeStep={this.changeStep} />
            default:
                return <JobForm submitJob={this.submitJob} changeStep={this.changeStep} />
        }
    }
    
    render() {
        return (
            <div>
                <Nav menu={this.menu} />
                <div className="container">
                    {this.renderStep(this.state.step)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Post;