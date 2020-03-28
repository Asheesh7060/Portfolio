import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w3l_footer">
                    <div className="container">

                        <div className="w3ls_footer_grids">

                            <div className="w3ls_footer_grid">
                                <div className="col-md-4 w3ls_footer_grid_left">
                                    <div className="w3ls_footer_grid_leftl">
                                         <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="w3ls_footer_grid_leftr">
                                        <h4>Location</h4>
                                        <p>3030 New York, NY, USA</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="col-md-4 w3ls_footer_grid_left">
                                    <div className="w3ls_footer_grid_leftl">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </div>
                                    <div className="w3ls_footer_grid_leftr">
                                        <h4>Email</h4>
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="col-md-4 w3ls_footer_grid_left">
                                    <div className="w3ls_footer_grid_leftl">
                                       <FontAwesomeIcon icon={faPhoneAlt}/>
                                    </div>
                                    <div className="w3ls_footer_grid_leftr">
                                        <h4>Call Me</h4>
                                        <p>(+000) 003 003 0052</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3l_footer_pos">
                        <p>© 2017 C-Resume. All Rights Reserved | Design by <a href="https://w3layouts.com/">W3layouts</a></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;