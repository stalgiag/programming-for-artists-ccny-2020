import React from 'react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import '../styles/main.scss';

import Scroll from '../../static/scroll.mp4';


export default function Resources() {
    return (
        <>
            <header>
                <Nav activeTab="WORK" />
                <div id="logo-container">
                    <video autoPlay loop muted>
                        <source src={Scroll} type="video/mp4" />
                    </video>
                </div>
            </header>
            <div id="body-container">
                <div className="body-center-content">
                    <h2 style={{textAlign: 'right'}}>YOUR WORK WILL BE ADDED TO THIS SECTION AFTER THE END OF THE SEMESTER</h2>
                </div>
            </div>
            <div id='marquee-container'>
                <Marquee />
            </div>
            <Footer />
        </ >
    );
}