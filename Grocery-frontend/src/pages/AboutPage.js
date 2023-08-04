import React,{Fragment,useEffect,useState} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Footer from "../layouts/home/Footer";
import bgImage from '../assets/images/gemma-stpjHJGqZyw-unsplash.jpg'
import bgImage1 from '../assets/images/blogs/89OtM0k3-online-grocery-deliveries-to-check-out-in-the-UAE-1200x800.jpg'
import bgImage2 from '../assets/images/blogs/Food-Grocery-Vegetables-1140771380.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AboutPage=()=>{

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',height:'30rem',marginBottom:30,backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:'white',background:'rgba(0, 0, 0, 0.54)',width:300,height:100,display:'flex',justifyContent:"center",alignItems:"center",border:'6px solid white'}}>About Us</h1>
            </div>
            <div style={{position:"relative",marginLeft:40,marginRight:40,marginTop:40}}>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",}}>
                    <h2 style={{fontSize:24,color: 'black',fontWeight:600,lineHeight:'1.75rem',marginBottom:30}}>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cupiditate dolore dolores enim libero magni nostrum temporibus voluptatem.
                        Autem beatae consequuntur doloribus enim facilis fugit minus molestiae omnis temporibus voluptates?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur excepturi harum nemo pariatur, praesentium rerum?
                        Adipisci est exercitationem maxime neque nobis placeat possimus sint suscipit! Facere quidem ratione tempore ullam.
                    </p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cupiditate dolore dolores enim libero magni nostrum temporibus voluptatem.
                        Autem beatae consequuntur doloribus enim facilis fugit minus molestiae omnis temporibus voluptates?
                        <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
                        Consequatur excepturi harum nemo pariatur, praesentium rerum?
                        Adipisci est exercitationem maxime neque nobis placeat possimus sint suscipit! Facere quidem ratione tempore ullam.
                    </p>
                    <p style={{marginBottom:40}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cupiditate dolore dolores enim libero magni nostrum temporibus voluptatem.
                        Autem beatae consequuntur doloribus enim facilis fugit minus molestiae omnis temporibus voluptates?
                    </p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6} style={{}}>
                                <img src={bgImage1} alt='image' style={{width:'100%',height:'100%'}}/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <img src={bgImage2} alt='image' style={{width:'100%',height:'100%'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                    <p style={{marginTop:40}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cupiditate dolore dolores enim libero magni nostrum temporibus voluptatem.
                        Autem beatae consequuntur doloribus enim facilis fugit minus molestiae omnis temporibus voluptates?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur excepturi harum nemo pariatur, praesentium rerum?
                        Adipisci est exercitationem maxime neque nobis placeat possimus sint suscipit! Facere quidem ratione tempore ullam.
                    </p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cupiditate dolore dolores enim libero magni nostrum temporibus voluptatem.
                        Autem beatae consequuntur doloribus enim facilis fugit minus molestiae omnis temporibus voluptates?
                    </p>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default AboutPage;