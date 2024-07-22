import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Grow from '@mui/material/Grow';

import './Portfolio.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import resumeData from '../../__utils/resumeData';

import ImageGallery from '../../components/ImageGallery/ImageGallery';


function Portfolio() {
    const [tabValue, setTabValue] = useState('mvp');
    const [projectDialog, setProjectDialog] = useState(false);

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
        <div className='portfolio_main_content'>
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className='section_title_text'>Portfolio</h6>
                </Grid>
                {/* TABS */}
                <Grid item xs={12}>
                    <Tabs value={tabValue} indicatorColor="white" className="customTabs" onChange={(event, newValue) => setTabValue(newValue)}>
                        <Tab label="Highlights" value="mvp"
                            className={tabValue === "mvp" ? "customTabs_item active" : "customTabs_item"}
                            onChange={(event, newValue) => setTabValue(newValue)}
                        />

                        {[...new Set(resumeData.projects.map((item) => item.tag))].map((tag) => (
                            <Tab label={tag} value={tag}
                                className={tabValue === tag ? "customTabs_item active" : "customTabs_item"}
                                onChange={(event, newValue) => setTabValue(newValue)}
                            />
                        ))}

                    </Tabs>
                </Grid>
                {/* Projekty */}
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {resumeData.projects.map((project) => (
                            <>
                                {tabValue === project.tag ? (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                                <CardActionArea>
                                                    <CardMedia className='customCard_image' image={project.images[0]} title={project.title} />
                                                    <CardContent>
                                                        <Typography variant={'body2'} className='customCard_title'>{project.title}</Typography>
                                                        <Typography variant="caption" className='customCard_caption'>{project.caption}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grow>
                                    </Grid>
                                ) : null}
                            </>
                        ))}
                        {resumeData.projects.slice(0, 3).map((project) => (
                            <>
                                {tabValue === 'mvp' ? (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                                <CardActionArea>
                                                    <CardMedia className='customCard_image' image={project.images[0]} title={project.title} />
                                                    <CardContent>
                                                        <Typography variant={'body2'} className='customCard_title'>{project.title}</Typography>
                                                        <Typography variant="caption" className='customCard_caption'>{project.caption}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grow>
                                    </Grid>
                                ) : null}
                            </>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog' maxWidth="md">
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                <img src={projectDialog.image} alt="" className='projectDialog_image' />
                <DialogContent style={{ height: "80vh" }}>                    
                    {<ul className='projectDialog_tag_item'>      
                        <li><Typography variant="caption" className='projectDialog_tag'>{projectDialog.tag}</Typography></li>                 
                        <li><Typography variant="caption" className='projectDialog_tag'>{projectDialog.tag2}</Typography></li>
                        <li><Typography variant="caption" className='projectDialog_tag'>{projectDialog.tag3}</Typography></li>
                        <li><Typography variant="caption" className='projectDialog_tag'>{projectDialog.tag4}</Typography></li>
                    </ul>}  
                    {projectDialog.images && (<ImageGallery images={projectDialog.images} />)}
                    <Typography className='projectDialog_description'>{projectDialog.description}</Typography>

                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map(link => (
                        <a href={link.link} taget='_blank' className='projectDialog_icon'>{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Portfolio;