import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardMedia from "@mui/material/CardMedia";
import bgImage1 from "../../assets/images/blogs/CEO-Advantages.jpg";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {Icon} from "@iconify/react";
import bgImage2 from "../../assets/images/blogs/Shutterstock_1361250623-2.jpg";
import bgImage3 from "../../assets/images/blogs/office-manager-woman.jpg";
import {Form, FormGroup, Input, Label} from "reactstrap";
import Button from "@mui/material/Button";

const ContactForm=()=>{

    return(
        <div className='mb-5' style={{display:"flex",justifyContent:"center",flexDirection:"column",padding:21,boxShadow:'0 1px 10px rgba(75,90,130,.1)',borderRadius:'0.375rem'}}>
            <h2 style={{fontSize:24,color: 'black',fontWeight:600,lineHeight:'1.75rem',marginBottom:30}}>Contact Us</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} style={{display:"flex",justifyContent:'center'}}>

                        <Box sx={{ maxWidth: { xs: 320, sm: 470, }, bgcolor: 'background.paper' }}>
                            <Tabs
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label={<div style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={bgImage1}
                                        alt="ceo"
                                    />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={12} lg={12} >
                                                <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                                    CEO
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                                    Mr. Daniel Jonson
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                                    +94 751882696
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions style={{display:'flex',justifyContent:'center'}}>
                                        <IconButton aria-label="email">
                                            <AlternateEmailIcon />
                                        </IconButton>
                                        <IconButton aria-label="facebook">
                                            <FacebookOutlinedIcon />
                                        </IconButton>
                                        <IconButton aria-label="twitter">
                                            <Icon icon="entypo-social:linkedin" />
                                        </IconButton>
                                    </CardActions>

                                </div>} />
                                <Tab label={<div style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={bgImage2}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={12} lg={12} >
                                                <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                                    Director
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                                    Mr. Justin Vendor
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                                    +94 775886214
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions style={{display:'flex',justifyContent:'center'}}>
                                        <IconButton aria-label="email">
                                            <AlternateEmailIcon />
                                        </IconButton>
                                        <IconButton aria-label="facebook">
                                            <FacebookOutlinedIcon />
                                        </IconButton>
                                        <IconButton aria-label="twitter">
                                            <Icon icon="entypo-social:linkedin" />
                                        </IconButton>
                                    </CardActions>

                                </div>} />
                                <Tab label={<div style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={bgImage3}
                                        alt="manager"
                                    />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={12} lg={12} >
                                                <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                                    Manager
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                                    Mrs. Mary Ann
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                                    +94 7125589647
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions style={{display:'flex',justifyContent:'center'}}>
                                        <IconButton aria-label="email">
                                            <AlternateEmailIcon />
                                        </IconButton>
                                        <IconButton aria-label="facebook">
                                            <FacebookOutlinedIcon />
                                        </IconButton>
                                        <IconButton aria-label="twitter">
                                            <Icon icon="entypo-social:linkedin" />
                                        </IconButton>
                                    </CardActions>

                                </div>} />
                            </Tabs>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                        <Form style={{marginLeft:30,marginRight:30}}>
                            <FormGroup>
                                <Label for="name">Full Name</Label>
                                <Input size="lg" id="name" name="name" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input size="lg" id="email" name="email" type="email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <Input size="lg" id="phone" name="phone" type="tel"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input size="lg" id="message" name="message" type="textarea"/>
                            </FormGroup>
                            <Button size='large' fullWidth variant="contained" style={{backgroundColor:'black'}}>Submit</Button>
                        </Form>
                    </Grid>
                </Grid>
            </Box>
            <br/>
        </div>
    )
}

export default ContactForm;