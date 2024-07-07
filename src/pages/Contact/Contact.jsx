import React from 'react';
import { Grid, TextField } from '@mui/material';
import Box from "@mui/material/Box";
import CustomButton from '../../components/Button/Button';

import './Contact.css';

const Contact = ()=> {

    const [form, setForm] = React.useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

    
    return(
        <div className="main_contact_div">
            {/* Contact */}
            <Grid container className="section pt_45 pb_45">
                {/* Contact form */}
                <Grid item xs={12}> 
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className='section_title_text'>Contact form</h6> 
                        </Grid>
                    </Grid>
                    <Box component="form" onSubmit={(e) =>{e.prevDefault(); console.log(form)}}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name'  onChange={handleChange}/> 
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={10} onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    
                                    <CustomButton text='Submit' onClick={handleChange}/>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>   
    );
};

export default Contact