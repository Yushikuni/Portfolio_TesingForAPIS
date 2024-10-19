import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Grow from '@mui/material/Grow';
//import './Portfolio.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Portfolio() {
    const [tabValue, setTabValue] = useState('mvp');
    const [projectDialog, setProjectDialog] = useState(false);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch data from GitHub API
        fetch('https://api.github.com/users/Yushikuni/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.log(error));
    }, []); // Empty array means it runs only once when the component is mounted

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
                        {[...new Set(repos.map((item) => item.language))].map((language, index) => (
                            <Tab key={index} label={language} value={language}
                                className={tabValue === language ? "customTabs_item active" : "customTabs_item"}
                                onChange={(event, newValue) => setTabValue(newValue)}
                            />
                        ))}
                    </Tabs>
                </Grid>
                {/* Projekty */}
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {repos.map((repo) => (
                            <>
                                {tabValue === repo.language ? (
                                    <Grid item xs={12} sm={6} md={4} key={repo.id}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(repo)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className='customCard_image'
                                                        image={'/path/to/default/image.jpg'}  // Pokud nem� image, pou�ij v�choz� obr�zek
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
                        {repos.slice(0, 6).map((repo) => (
                            <>
                                {tabValue === 'mvp' ? (
                                    <Grid item xs={12} sm={6} md={4} key={repo.id}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(repo)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className='customCard_image'
                                                        image={'/path/to/default/image.jpg'}
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

            {/* Dialogov� okno s podrobnostmi o projektu */}
            <Dialog open={!!projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog' maxWidth="md">
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.name}</DialogTitle>
                <DialogContent style={{ height: "80vh" }}>
                    <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    <a href={projectDialog.html_url} target='_blank' rel='noopener noreferrer' className='projectDialog_icon'>
                        View on GitHub
                    </a>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Portfolio;
