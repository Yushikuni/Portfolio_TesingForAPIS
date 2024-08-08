import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import resumeData from '../../__utils/resumeData';

import './Footer.css'

const Footer = ()=> {
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
                    Inspired by <a href="https://dev.epicgames.com/community/" target="_blank" rel="noreferrer" >EpicGames</a>.<br/>
                 </Typography>
            </div>
        </div>
    );
};

export default Footer