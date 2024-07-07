/* eslint-disable react-refresh/only-export-components */
//import React, { useState, useEffect } from 'react';
//import {
//    Nav,
//    Navbar,
//} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { /*NavLink,*/ withRouter } from "react-router-dom";
//import {
//    HomeRounded,
//    Telegram,
//} from "@mui/icons-material";
//import resumeData from '../../__utils/resumeData';
//import CustomButton from '../Button/Button';
import './Header.css';

function Header ()/*= (props)=>*/  {
    //const pathName = props?.location?.pathname;
    //const [resumeData, setResumeData] = useState({}); // Inicializace prázdného objektu

    //useEffect(() => {
    //    // Použití funkce fetch k načtení dat z JSON souboru
    //    fetch('/public/utils/resumeData.json') // Změňte cestu podle vašeho umístění souboru
    //        .then((response) => response.json())
    //        .then((data) => {
    //            setResumeData(data); // Nastavení načtených dat do stavu
    //        });
    //}, []); // [] zajistí, že se data načtou pouze při prvotním renderu komponenty*/

    return (
        //<Navbar expand="lg" sticky='top' className='header'>
        //    {/* Home Link */}
        //    <Nav.Link as={NavLink} to="/" style={{ padding: '0px' }}>
        //        <Navbar.Brand className='header_home'>
        //            <HomeRounded />
        //        </Navbar.Brand>
        //    </Nav.Link>
        //    <Navbar.Toggle />
        //    <Navbar.Collapse>
        //        <Nav className='header_left'>
        //            {/* Resume Link */}
        //            <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>

        //            {/* Portfolio Link */}
        //            <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "header_link_active" : "header_link"}>Portfolio</Nav.Link>

        //        </Nav>
        //        {/*<div className="header_right">*/}
        //        {/*    {Object.keys(resumeData.socials).map(social => (*/}
        //        {/*        <a href={resumeData.socials[social].link} target="_blank" rel="noopener noreferrer">{resumeData.socials[social].icon}</a>*/}
        //        {/*    ))}*/}
        //        {/*</div>*/}
        //        <div className='email' >
        //            <a href="mailto:huskvenimrah@gmail.com" target="_blank" rel="noopener noreferrer" className="href_hidden">
        //                <CustomButton text={'Message Me'} icon={<Telegram />} />
        //            </a>
        //        </div>
        //    </Navbar.Collapse>
        //</Navbar>
        <>
            <h1>
                Header
            </h1>
        </>
    );
}
export default withRouter(Header);