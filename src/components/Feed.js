import React from 'react'
import Card from './Card';

class Feed extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {
                    title: "title 1",
                    "intro": "intro 1"
                },
                {
                    title: "title 2",
                    "intro": "intro 2"
                },
                {
                    title: "title 3",
                    "intro": "intro 4"
                }
            ]
        };
    }
    
    render() {
        return (
            <main role="main">
                <div class="container">
                    <div class="mt-3">
                        <div>
                            <h1 className="mb-3">Empleos para ti</h1>
                        
                            {this.state.jobs.map((job) =>
                                <Card title={job.title} intro={job.intro}/>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Feed