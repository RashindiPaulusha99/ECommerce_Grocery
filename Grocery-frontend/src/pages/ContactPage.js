import React,{Fragment,useEffect,useState} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Footer from "../layouts/home/Footer";
import bgImage from "../assets/images/blogs/contact.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bgImage1 from "../assets/images/blogs/CEO-Advantages.jpg";
import bgImage2 from "../assets/images/blogs/Shutterstock_1361250623-2.jpg";
import bgImage3 from "../assets/images/blogs/office-manager-woman.jpg";
import { Label,Input,FormGroup,FormText,Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContactForm from "../components/contact/ContactForm";


const ContactPage=()=>{

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',height:'30rem',marginBottom:30,backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:'white',background:'rgba(0, 0, 0, 0.54)',width:300,height:100,display:'flex',justifyContent:"center",alignItems:"center",border:'6px solid white'}}>Contact Us</h1>
            </div>
            <div style={{position:"relative",marginLeft:40,marginRight:40,marginTop:40}}>
               <ContactForm/>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",}}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12}>
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
                        </Grid>
                    </Box>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default ContactPage;