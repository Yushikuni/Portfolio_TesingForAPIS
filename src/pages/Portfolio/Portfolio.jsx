// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Grow from '@mui/material/Grow';
import './Portfolio.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useGithubRepos from '../../components/GetData/Projects';
import defaultPic from '../../assets/images/defaultImage.png';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
//import useItchioGames from '../../components/GetData/PublishedGames';
function Portfolio() {
    const [tabValue, setTabValue] = useState('mvp');
    const [projectDialog, setProjectDialog] = useState(null);


    const { repos, loading, error } = useGithubRepos('Yushikuni', ["portfolio-website", "finished-project"]);  // Hook is called
   // const { games, loading: gamesLoading, error: gamesError } = useItchioGames();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data.</p>;

    if (!Array.isArray(repos) || repos.length === 0) {
        return <p>No repositories found.</p>;
    }
    if (!resumeData?.projects) {
        return <p>No projects found.</p>;
    }

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
                        />


                        {[...new Set(repos.map((item) => item.language))].map((language) => (
                            <Tab key={language} label={language} value={language}
                                className={tabValue === language ? "customTabs_item active" : "customTabs_item"}
                            />
                        ))}
                    </Tabs>
                </Grid>
                {/* Projekty */}
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {resumeData.projects && Array.isArray(resumeData.projects) && resumeData.projects.map((project) => (
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
                        {repos.map((repo) => (
                            <>
                                {tabValue === repo.language ? (
                                    <Grid item xs={12} sm={6} md={4} key={repo.id}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(repo)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className='customCard_image'
                                                        image={repo.image||defaultPic}  // Pokud nemáš image, použij výchozí obrázek
                                                        title={repo.name}
                                                    />
                                                    <CardContent>
                                                        <Typography variant={'body2'} className='customCard_title'>{repo.name}</Typography>
                                                        <Typography variant="caption" className='customCard_caption'>{repo.description}</Typography>
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

            {/* Dialogové okno s podrobnostmi o projektu */}
            <Dialog open={!!projectDialog} onClose={() => setProjectDialog(null)} className='projectDialog' maxWidth="md">
                {projectDialog && (
                    <>
                        <DialogTitle onClose={() => setProjectDialog(null)}>{projectDialog.name}</DialogTitle>
                        <DialogContent style={{ height: "80vh" }}>
                            {projectDialog.images && (<ImageGallery images={projectDialog.images} />)}
                            <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
                            
                        </DialogContent>
                        <DialogActions className='projectDialog_actions'>
                            <a href={projectDialog?.html_url} target='_blank' rel='noopener noreferrer' className='projectDialog_icon'>
                                <a href={`https://github.com/${username}/${projectName}`} target="_blank" rel="noopener noreferrer">View Code</a>

                            </a>
                            {projectDialog?.links?.map(link => (
                                <a key={link } href={link.link} className='projectDialog_icon'>{link.icon}</a>
                            ))}
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}

export default Portfolio;