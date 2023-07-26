import React from "react";
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HeaderIcons from "../Home/HeaderIcons";
import Header from "../../layouts/Header";

const Cart = (props) => {

    return(
            <div>
                <Header/>
                <HeaderIcons/>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid row item xs={12} md={12} lg={12}>
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6} md={6} lg={6} style={{border:'1px solid black'}}>
                                                <Grid item xs={6} md={6} lg={6} style={{display:'flex', justifyContent:'flex-start'}}>
                                                    <h4 style={{margin:20}}>Total : </h4>
                                                </Grid>
                                                <Grid item xs={6} md={6} lg={6}>
                                                    <h4 style={{margin:20}}>Total : </h4>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid row item xs={12} md={12} lg={12} style={{position:'absolute', bottom:0,}}>
                            <Divider/>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6} lg={6}>
                                    <h4 style={{margin:20}}>Total : </h4>
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <p style={{margin:20}}>Rs: 200.00</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
    )
}

export default Cart;