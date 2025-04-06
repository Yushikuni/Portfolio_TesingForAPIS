import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { TimelineDot, TimelineItem } from '@mui/lab';
import { TimelineContent } from '@mui/lab';
import CustomTimeline, { CustomTimeLineSeparator } from '../../components/Timeline/Timeline.jsx';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import resumeData from '../../__utils/resumeData';

import { Paper } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import './Resume.css';


const Resume = () => {
    /*const [resumeData, setResumeData] = useState({}); // Inicializace prázdného objektu

    useEffect(() => {
        // Použití funkce fetch k načtení dat z JSON souboru
        fetch('/public/utils/resumeData.json') // Změňte cestu podle vašeho umístění souboru
            .then((response) => response.json())
            .then((data) => {
                setResumeData(data); // Nastavení načtených dat do stavu
            });
    }, []); // [] zajistí, že se data načtou pouze při prvotním renderu komponenty*/

    return (
        <div className='main_resume_div'>
            {/* ABOUT me */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className='section_title_text'>About me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className='aboutme_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* Education and EXP */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className='section_title_text'>Resumé</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* expiriences */}
                        <Grid item sm={12} md={4}>
                            <CustomTimeline title='Work experience' icon={<WorkIcon />}>
                                {resumeData.expiriences.map(expirience => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{expirience.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{expirience.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{expirience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* education*/}
                        <Grid item sm={12} md={4}>
                            <CustomTimeline title='Education' icon={<SchoolIcon />}>
                                {resumeData.educations.map(education => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* Certificates */}
                        <Grid item sm={12} md={4}>
                            <CustomTimeline title='Certificates' icon={<ReceiptIcon />}>

                                {resumeData.certificates.map(cert => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{cert.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{cert.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{cert.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                                Additional certification can be viewed on my <a href="https://www.linkedin.com/in/kvetuse-husakova/">LinkedIn</a>
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Skills */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className='section_title_text'>My skills</h6>
                </Grid>
                <Grid container spacing={3} justify-content='space-between' className="section pb_45">
                    {resumeData.skills.map(skill => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={9} className='skill'>
                                <Typography variant='h6' className='skill_title'>
                                    {skill.title}
                                </Typography>
                                {skill.description.map(element => (
                                    <Typography variant='body2' className='skill_description'>
                                        <TimelineDot variant={'outlined'} className='timeline_dot' />
                                        {element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default Resume;