import React from 'react';
import Doc from '../components/Doc';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import '../styles/main.scss';
import mobile from 'is-mobile';

import Scroll from '../../static/scroll.mp4';

export default function Home() {
    if (mobile()) {
        return (
            <div>
                Mobile is not currently available for this class site; check back on a desktop or laptop
            </div>
        );
    }
    return (
        <>
            <header>
                <Nav activeTab="SYLLABUS"/>
                <div id="logo-container">
                    <video autoPlay loop muted>
                        <source src={Scroll} type="video/mp4" />
                    </video>
                </div>
            </header>
            <div id="body-container">
                <div className="body-center-content">
                    <div className="iframe-container">
                        <Doc className="doc" id="syllabus" src="https://docs.google.com/document/d/e/2PACX-1vSrGLgsiRcWnDguLavDCz2v020qaP7wY4MkzVl_DZw7KMMlaHpoRf5EcygiUVdbSf9d2ylNtalpTzxs/pub?embedded=true" />
                    </div>
                </div>
            </div>
            <div id='marquee-container'>
                <Marquee />
            </div>
            <Footer />
        </>
    );
}
