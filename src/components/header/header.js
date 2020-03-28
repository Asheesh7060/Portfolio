import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="w3-banner-top">
                    <div className="agileinfo-dot">
                        <div className="w3layouts_menu">
                            <nav className="cd-stretchy-nav edit-content">
                                <a className="cd-nav-trigger" href="#0">
                                    Menu <span aria-hidden="true"></span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#home" className="scroll"><span>Home</span></a>
                                    </li>
                                    <li>
                                        <a href="#about" className="scroll"><span>About</span></a>
                                    </li>
                                    <li>
                                        <a href="#experiences" className="scroll"><span>Experiences</span></a>
                                    </li>
                                    <li>
                                        <a href="#skills" className="scroll"><span>Skills</span></a>
                                    </li>
                                    <li>
                                        <a href="#projects" className="scroll"><span>Projects</span></a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="scroll"><span>Contact</span></a>
                                    </li>
                                </ul>
                                <span aria-hidden="true" className="stretchy-nav-bg"></span>
                            </nav>
                        </div>
                        <div className="w3-banner-grids">
                            <div className="col-md-6 w3-banner-grid-left">
                                <div className="w3-banner-img">
                                    <img src="src/assets/images/ban661.jpg" alt="img" />
                                    <h3 className="test">Chris Adam</h3>
                                    <p className="test" >Graphic designer</p>
                                </div>
                            </div>
                            <div className="col-md-6 w3-banner-grid-right">
                                <div className="w3-banner-text">
                                    <h3>Career Goal</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim velit sed nibh placerat, non aliquam purus pretium. Donec at justo dignissim, maximus elit et, vestibulum mi.</p>
                                </div>
                                <div className=" w3-right-addres-1">
                                    <ul className="address">
                                        <li>
                                            <ul className="agileits-address-text ">
                                                <li className="agile-it-adress-left"><b>D.O.B</b></li>
                                                <li><span>:</span>18-09-1995</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li className="agile-it-adress-left"><b>PHONE</b></li>
                                                <li><span>:</span>(+91)9908817060</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li className="agile-it-adress-left"><b>ADDRESS</b></li>
                                                <li><span>:</span>3030 New York, NY, USA</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li className="agile-it-adress-left"><b>E-MAIL</b></li>
                                                <li><span>:</span><a href="mailto:example@mail.com"> info@example.com</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li className="agile-it-adress-left"><b>WEBSITE</b></li>
                                                <li>
                                                    <span>:</span>
                                                    <a href="https://google.com">www.myresume.com</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="thim-click-to-bottom">
                        <a href="#about" className="scroll">
                            <i className="fa  fa-chevron-down"></i>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;