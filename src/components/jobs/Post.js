import React from 'react'
import Form from 'react-jsonschema-form'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import Job from './forms/Job'
import Company from './forms/Company'
import { db } from '../../firebase';

class Post extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {step: 1};
        this.submitJob = this.submitJob.bind(this);
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
    
    renderStep(step) {
        switch(step) {
            case 1:
            return <Job submitJob={this.submitJob}/>
            case 2:
            return <Company />          
            default:
            return <Job />
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