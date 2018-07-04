import React from 'react'

import Steps from './common/Steps'

function Preview(props) {
    return (
        <div className="row mb-5">
            <Steps changeStep={props.changeStep}  active={2} />
            <div className="col-md-12 mt-4 border-bottom mb-4">
                <p className="job-presentation">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="col-md-12 border-bottom pb-4 mb-4">
                <h1>Lorem ipsum dolor sit amet</h1>
                <h5>Fullstack.pe</h5>
                <p className="mb-0">Lima, Perú</p>
                <a href="https://www.fullstack.pe">www.fullstack.pe</a>
            </div>
            <div className="col-md-12">
                <p className="font-weight-bold">Ut enim ad minim veniam</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium. Neque sodales ut etiam sit amet. Sit amet aliquam id diam maecenas ultricies mi eget. Malesuada nunc vel risus commodo. Nunc eget lorem dolor sed. Pulvinar sapien et ligula ullamcorper malesuada proin. Tincidunt vitae semper quis lectus nulla at volutpat diam. Elit at imperdiet dui accumsan sit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. In iaculis nunc sed augue lacus viverra vitae congue eu. Et netus et malesuada fames ac turpis. Vestibulum sed arcu non odio euismod. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Ornare suspendisse sed nisi lacus sed viverra tellus in. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Auctor neque vitae tempus quam. Aliquam purus sit amet luctus venenatis lectus. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Nunc sed id semper risus in hendrerit.
                </p>
                <p>
                    Aliquam ut porttitor leo a diam. Et netus et malesuada fames ac turpis egestas integer. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Viverra suspendisse potenti nullam ac tortor vitae. Iaculis eu non diam phasellus vestibulum lorem. Tincidunt praesent semper feugiat nibh. At elementum eu facilisis sed odio morbi quis. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Nunc scelerisque viverra mauris in aliquam sem fringilla. Interdum consectetur libero id faucibus. A diam maecenas sed enim ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. In aliquam sem fringilla ut morbi tincidunt. Dolor sit amet consectetur adipiscing elit. Morbi leo urna molestie at elementum eu facilisis sed odio.
                </p>
            </div>
            <div className="col-md-12 bg-light p-3 mb-5">
                <h5 className="mb-3">Postular a este trabajo</h5>
                <p className="font-weight-bold">
                    Envía tu CV a informes@fullstack.pe.
                </p>
            </div>
            <div className="col-md-12 text-right">
                <button type="button" className="btn btn-success">Publica</button>
            </div>
        </div>
    )
}

export default Preview