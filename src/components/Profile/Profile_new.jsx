import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import CustomTimeline, {CustomTimeLineSeparator} from '../Timeline/Timeline';

import PersonIcon from '@mui/icons-material/Person';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import GetAppIcon from '@mui/icons-material/GetApp';


import resumeData from '../../utils/resumeData';

import CustomButton from '../Button/Button';
import profilePic from '../../assets/images/profilePic.png';

import './Profile.css';
import cv from '../../assets/download/CV.pdf';

export const CustomTimelineItem = ({title, text, link}) =>
(
    <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent className="timeline_content">            
            {link ? (
                <Typography>
                    <span >{title}:{" "}</span><a href={link} target='_blank' rel="norefer noreferrer">{text}</a>
                </Typography>) 
                : (
                <Typography>
                    <span>{title}:{" "}</span>{text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = ()=> {

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
        <div className='profile_container_shadow'> 
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={profilePic} alt=""/>
            </figure>
            <div className='profile_information'>
                <CustomTimeline icon ={<PersonIcon />}/>
                <CustomTimelineItem title='Name'  text={resumeData.name} />
                <CustomTimelineItem title='Title' text={resumeData.title} />
                <CustomTimelineItem title='Email' text = {<a href="mailto:huskvenimrah@gmail.com" target='_blank' rel="noopener noreferrer" className="href_hidden">{resumeData.email}</a>}/>               
                <div className="button_container">
                    <a href={cv} className="dowload_cv" target='_blank' rel="noopener noreferrer">
                        <CustomButton text={'DOWNLOAD CV'} icon={<GetAppIcon/>} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile
