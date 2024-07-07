import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Grow from '@mui/material/Grow';

import './Blog.css';
import '../../utils/resumeData';
import Tabs from '@restart/ui/esm/Tabs';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';


function Blog() {
    const [tabValue, setTabValue] = useState('all');
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <div className='blog_main_content'>
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className='section_title_text'>Blog</h6>
                </Grid>
                {/* TABS */}
                <Grid item xs={12}>
                    <Tabs value={tabValue} indicatorColor="white" className="customTabs" onChange={(event, newValue) => setTabValue(newValue)}>
                        <Tab label="All" value="all"
                            className={tabValue === "all" ? "customTabs_item active" : "customTabs_item"}
                            onChange={(event, newValue) => setTabValue(newValue)}
                        />

                        {[...new Set(resumeData.articles.map((item) => item.tag))].map((tag) => (
                            <Tab label={tag} value={tag}
                                className={tabValue === tag ? "customTabs_item active" : "customTabs_item"}
                                onChange={(event, newValue) => setTabValue(newValue)}
                            />
                        ))}

                    </Tabs>
                </Grid>
            {/*Blog posts */}
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                {resumeData.articles.map((article) => (
                        <>
                            {tabValue === 'all' ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card className='customCard' onClick={() => setProjectDialog(article)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' image={article.images[0]} title={article.title} />
                                                <CardContent>
                                                    <Typography variant={'body2'} className='customCard_title'>{article.title}</Typography>
                                                    <Typography variant="caption" className='customCard_caption'>{article.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}
                    {resumeData.articles.map((article) => (
                        <>
                            {tabValue === article.tag ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card className='customCard' onClick={() => setProjectDialog(article)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' image={article.images[0]} title={article.title} />
                                                <CardContent>
                                                    <Typography variant={'body2'} className='customCard_title'>{article.title}</Typography>
                                                    <Typography variant="caption" className='customCard_caption'>{article.caption}</Typography>
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
            {/*Blog posts detailed */}
            
        </div>
    );
}

export default Blog;