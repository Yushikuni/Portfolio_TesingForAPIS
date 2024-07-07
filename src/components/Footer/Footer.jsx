import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import resumeData from '../../__utils/resumeData';

import './Footer.css'

const Footer = ()=> {
   /* const [resumeData, setResumeData] = useState({}); // Inicializace prázdného objektu

    useEffect(() => {
        // Použití funkce fetch k načtení dat z JSON souboru
        fetch('/public/utils/resumeData.json') // Změňte cestu podle vašeho umístění souboru
            .then((response) => response.json())
            .then((data) => {
                setResumeData(data); // Nastavení načtených dat do stavu
            });
    }, []); // [] zajistí, že se data načtou pouze při prvotním renderu komponenty*/

    return(
        <div className='footer'>
            <div className="footer_left">
                <Typography className="footer_name">
                    {resumeData.name}
                </Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyrights">
                    Designed and developed by © <a href="/" target='_blank'>Květuše Husáková</a>
                    <br/>
                    Inspired by <a href="https://thetav.online/html/mat/default/index.html" target="_blank" rel="noreferrer" >Travonline</a>.<br/>
                    Also thanks to <a href="https://www.youtube.com/channel/UCSEy8lBnjp42x5W1JPcca0w" target="_blank" rel="noreferrer">Salman Fazal</a> for tutorial
                </Typography>
            </div>
            {/*<div className="footer_right">
                <Typography className="footer_copyrights">
                    Designed and developed by © <a href="/" target='_blank'>Květuše Husáková</a>
                    <br/>
                    Inspired by <a href="https://dev.epicgames.com/community/" target="_blank" rel="noreferrer" >EpicGames</a>.<br/>
            </div-->*/}
        </div>
    );
};

export default Footer