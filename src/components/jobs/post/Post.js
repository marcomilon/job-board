import React from 'react'
import Form from 'react-jsonschema-form'

import JobForm from './JobForm'
import Preview from './Preview'
import Publish from './Publish'

import Nav from '../../common/Nav'
import Footer from '../../common/Footer'

import firebase, { db, storage } from '../../../firebase'

var cleaner = require('deep-cleaner')
var slug = require('slug')
var parseDataUrl = require('parse-data-url')

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
        
        document.title = "Publica tu empleo"
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
            post: formData,
            isValid: true
        })
        
    }
    
    publishJob() {
                
        var post = this.state.post
        var that = this
        
        cleaner(post.company)
        cleaner(post.job)
        
        var companyName = slug(post.company.name, {
            lower: true
        })
        
        var jobTitle = slug(post.job.title, {
            lower: true
        })
        
        var jobSlug = companyName + '-' + jobTitle;
        
        post.job.timestamp = firebase.firestore.FieldValue.serverTimestamp()
        
        var companyRef = db.collection("companies").doc(companyName)
        var jobRef = companyRef.collection("jobs").doc(jobSlug)
                
        companyRef.set(
            post.company
        ).then(function() {
        
            jobRef.set(post.job).then(function() {
                if(post.company.logo) {
                    var parsed = parseDataUrl(post.company.logo)
                    var storageRef = firebase.storage().ref().child(parsed.name);
                    storageRef.putString(post.company.logo, 'data_url').then(function(snapshot) {
                        snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            db.collection("posts").add({
                                companyName: post.company.name,
                                title: post.job.title,
                                timestamp: post.job.timestamp,
                                job: post.job,
                                company: post.company,
                                slug: jobSlug,
                                published: true,
                                logoUrl: downloadURL
                            })
                        });
                    });
                } else {                                
                    db.collection("posts").add({
                        companyName: post.company.name,
                        title: post.job.title,
                        timestamp: post.job.timestamp,
                        job: post.job,
                        company: post.company,
                        slug: jobSlug,
                        published: true,
                    })
                }
        
                that.setState({
                    step: 3
                })
        
            })
        
        }).catch(function(error) {
            console.error("Error adding job: ", error)
        })
    }
    
    renderStep(step) {
        switch(step) {
            case 1:
                return <JobForm formData={this.state.post} changeStep={this.changeStep} submitJob={this.submitJob} />
            case 2:
                return <Preview post={this.state.post} changeStep={this.changeStep} publishJob={this.publishJob}/>
            case 3:
                return <Publish />
            default:
                return <JobForm formData={this.state.post} changeStep={this.changeStep} submitJob={this.submitJob}/>
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