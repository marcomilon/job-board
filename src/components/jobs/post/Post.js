import React from 'react'
import Form from 'react-jsonschema-form'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import Job from './Job'
import Preview from './Preview'
import { db } from '../../firebase'

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
    
    changeStep(step) {
        console.log(step)
    }
    
    renderStep(step) {
        switch(step) {
            case 1:
                return <Job submitJob={this.submitJob} changeStep={this.changeStep}/>
            case 2:
                return <Preview />
            default:
                return <Job submitJob={this.submitJob} changeStep={this.changeStep}/>
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