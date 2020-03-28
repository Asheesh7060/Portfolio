import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w3-about" id="about">
                    <div className="container">
                        <div className="w3-about-head">
                            <h3>About me</h3>
                        </div>
                        <div className="w3-about-grids">
                            <div className=" w3-about-grids1">
                                <div className="col-md-6 w3-about-grid-left1">
                                    <img src="images/ab5.jpg" alt="img1" />
                                </div>
                                <div className="col-md-6 w3-about-grid-right1">
                                    <h3>Aliquam euismod at turpis eu egestas</h3>
                                    <p> Nullam pulvinar nunc eget tortor elementum, sed vehicula massa vestibulum. Aenean gravida arcu viverra nisl euismod laoreet. Fusce accumsan vel arcu at tincidunt. Nulla non nulla ultrices, pharetra orci in, varius nunc.</p>
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipisci ask</h5>
                                    <div className="w3-about-grid-small-border">
                                        <div className="col-md-4 w3-about-grid-small">
                                            <h3 className="w3-head-project">20</h3>
                                            <h5>web projects</h5>
                                        </div>
                                        <div className="col-md-4 w3-about-grid-small">
                                            <h3 className="w3-head-project">30</h3>
                                            <h5>php projects</h5>
                                        </div>
                                        <div className="col-md-4 w3-about-grid-small">
                                            <h3 className="w3-head-project">50</h3>
                                            <h5>java projects</h5>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="w3-about-grids2">
                                    <div class="col-md-6 w3-about-grid-left2">
                                        <h3>Pellentesque sit amet ex at nisl posuere</h3>
                                        <p> Nullam pulvinar nunc eget tortor elementum, sed vehicula massa vestibulum. Aenean gravida arcu viverra nisl euismod laoreet. Fusce accumsan vel arcu at tincidunt. Nulla non nulla ultrices, pharetra orci in, varius nunc.</p>
                                        <h4><a href="#">Readmore</a></h4>

                                    </div>
                                    <div class="col-md-6 w3-about-grid-right2">
                                        <img src="images/ab7.jpg" alt="img1" />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;