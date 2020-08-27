import React from 'react';
import { Link } from 'gatsby';

export default function Nav(props) {
    return (
        <nav>
            <ul>
                <li id={props.activeTab=='SYLLABUS'?'active-nav-tab':''} ><Link to="/">SYLLABUS</Link></li>
                <li id={props.activeTab=='SCHEDULE'?'active-nav-tab':''} ><Link to="/schedule">SCHEDULE</Link></li>
                <li id={props.activeTab=='RESOURCES'?'active-nav-tab':''} ><Link to="/resources">RESOURCES</Link></li>
                <li><Link to="https://www.are.na/stalgia-grigg/objects-non">ARE.NA</Link></li>
                <li id={props.activeTab=='WORK'?'active-nav-tab':''}><Link to="/work/">WORK</Link></li>
            </ul>
        </nav>
    );
}
